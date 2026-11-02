import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'default-school' },
    update: {},
    create: {
      name: 'Default School',
      slug: 'default-school',
    },
  });

  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const teacherPassword = await bcrypt.hash('Teacher123!', 10);
  const studentPassword = await bcrypt.hash('Student123!', 10);
  const parentPassword = await bcrypt.hash('Parent123!', 10);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@school.local' },
    update: {},
    create: {
      email: 'admin@school.local',
      passwordHash: adminPassword,
      role: 'ADMIN',
      tenantId: tenant.id,
    },
  });

  const teacherUser = await prisma.user.upsert({
    where: { email: 'teacher@school.local' },
    update: {},
    create: {
      email: 'teacher@school.local',
      passwordHash: teacherPassword,
      role: 'TEACHER',
      tenantId: tenant.id,
    },
  });

  const studentUser = await prisma.user.upsert({
    where: { email: 'student@school.local' },
    update: {},
    create: {
      email: 'student@school.local',
      passwordHash: studentPassword,
      role: 'STUDENT',
      tenantId: tenant.id,
    },
  });

  const parentUser = await prisma.user.upsert({
    where: { email: 'parent@school.local' },
    update: {},
    create: {
      email: 'parent@school.local',
      passwordHash: parentPassword,
      role: 'PARENT',
      tenantId: tenant.id,
    },
  });

  const teacher = await prisma.teacher.upsert({
    where: { userId: teacherUser.id },
    update: {},
    create: {
      userId: teacherUser.id,
      employeeCode: 'EMP-1001',
      department: 'Mathematics',
      tenantId: tenant.id,
    },
  });

  const parent = await prisma.parent.upsert({
    where: { userId: parentUser.id },
    update: {},
    create: {
      userId: parentUser.id,
      phone: '+1234567890',
      relationship: 'Father',
      tenantId: tenant.id,
    },
  });

  const schoolClass = await prisma.schoolClass.upsert({
    where: { id: 'class-1' },
    update: {},
    create: {
      id: 'class-1',
      name: 'Grade 10 - Science',
      gradeLevel: 'Grade 10',
      academicYearId: 'academic-2025',
      teacherId: teacher.id,
      tenantId: tenant.id,
    },
  });

  const student = await prisma.student.upsert({
    where: { userId: studentUser.id },
    update: {},
    create: {
      userId: studentUser.id,
      admissionNumber: 'ADM-2025-001',
      classId: schoolClass.id,
      guardianId: parent.id,
      tenantId: tenant.id,
    },
  });

  const subject = await prisma.subject.upsert({
    where: { id: 'subject-math' },
    update: {},
    create: {
      id: 'subject-math',
      name: 'Mathematics',
      code: 'MATH101',
      classId: schoolClass.id,
      teacherId: teacher.id,
      tenantId: tenant.id,
    },
  });

  await prisma.enrollment.upsert({
    where: { id: 'enroll-1' },
    update: {},
    create: {
      id: 'enroll-1',
      studentId: student.id,
      classId: schoolClass.id,
      academicYearId: 'academic-2025',
      status: 'ACTIVE',
      tenantId: tenant.id,
    },
  });

  await prisma.academicYear.upsert({
    where: { id: 'academic-2025' },
    update: {},
    create: {
      id: 'academic-2025',
      name: '2025-2026',
      startDate: new Date('2025-06-01'),
      endDate: new Date('2026-05-31'),
    },
  });

  await prisma.announcement.upsert({
    where: { id: 'announcement-1' },
    update: {},
    create: {
      id: 'announcement-1',
      title: 'Welcome to the new academic year',
      body: 'Classes begin next Monday. Please check your timetable and receive your orientation briefing.',
      audienceRole: 'STUDENT',
      classId: schoolClass.id,
      createdBy: adminUser.id,
      tenantId: tenant.id,
    },
  });

  console.log('Seed data initialized successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
