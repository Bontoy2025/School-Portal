import type { Express } from 'express';
import { registerAuthRoutes } from './auth.routes';
import { prisma } from '../lib/prisma';
import { requireAuth } from '../middleware/auth';
import { requireRole } from '../middleware/rbac';
import { Role } from '@school-portal/shared';
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['ADMIN', 'TEACHER', 'STUDENT', 'PARENT']),
});

export function registerRoutes(app: Express) {
  registerAuthRoutes(app);

  app.get('/api/v1/users', requireAuth, requireRole(Role.ADMIN), async (req, res) => {
    const users = await prisma.user.findMany({
      where: { tenantId: req.user!.tenantId },
      select: {
        id: true,
        email: true,
        role: true,
        tenantId: true,
        isActive: true,
      },
    });

    return res.json({ success: true, data: users });
  });

  app.post('/api/v1/users', requireAuth, requireRole(Role.ADMIN), async (req, res) => {
    const parsed = userSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: 'Invalid user payload' });
    }

    const { email, password, role } = parsed.data;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ success: false, error: 'User already exists' });
    }

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: await require('bcryptjs').default.hash(password, 10),
        role: role as any,
        tenantId: req.user!.tenantId,
      },
    });

    return res.status(201).json({ success: true, data: { id: user.id, email: user.email, role: user.role } });
  });

  app.get('/api/v1/students/:id', requireAuth, async (req, res) => {
    const student = await prisma.student.findUnique({
      where: { id: req.params.id },
      include: {
        user: true,
        class: true,
        guardian: true,
      },
    });

    if (!student) {
      return res.status(404).json({ success: false, error: 'Student not found' });
    }

    if (req.user!.role === Role.STUDENT && student.userId !== req.user!.sub) {
      return res.status(403).json({ success: false, error: 'Forbidden' });
    }

    return res.json({ success: true, data: student });
  });

  app.get('/api/v1/classes', requireAuth, async (req, res) => {
    const classes = await prisma.schoolClass.findMany({
      where: { tenantId: req.user!.tenantId },
      include: { teacher: true, students: true },
    });

    return res.json({ success: true, data: classes });
  });

  app.get('/api/v1/classes/:classId/attendance', requireAuth, async (req, res) => {
    const date = req.query.date ? new Date(String(req.query.date)) : new Date();

    const rows = await prisma.attendance.findMany({
      where: {
        tenantId: req.user!.tenantId,
        classId: req.params.classId,
        date,
      },
      include: { student: true },
    });

    return res.json({ success: true, data: rows });
  });

  app.post('/api/v1/attendance', requireAuth, requireRole(Role.TEACHER, Role.ADMIN), async (req, res) => {
    const attendance = await prisma.attendance.create({
      data: {
        studentId: req.body.studentId,
        classId: req.body.classId,
        date: new Date(req.body.date),
        period: req.body.period,
        status: req.body.status,
        markedBy: req.user!.sub,
        tenantId: req.user!.tenantId,
      },
    });

    return res.status(201).json({ success: true, data: attendance });
  });

  app.get('/api/v1/timetable', requireAuth, async (req, res) => {
    const classId = req.query.classId as string | undefined;
    const timetable = await prisma.timetable.findMany({
      where: {
        tenantId: req.user!.tenantId,
        ...(classId ? { classId } : {}),
      },
      include: { subject: true, teacher: true },
    });

    return res.json({ success: true, data: timetable });
  });

  app.get('/api/v1/assignments', requireAuth, async (req, res) => {
    const assignments = await prisma.assignment.findMany({
      where: { tenantId: req.user!.tenantId },
      include: { subject: true },
    });

    return res.json({ success: true, data: assignments });
  });

  app.post('/api/v1/assignments', requireAuth, requireRole(Role.TEACHER, Role.ADMIN), async (req, res) => {
    const assignment = await prisma.assignment.create({
      data: {
        subjectId: req.body.subjectId,
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate ? new Date(req.body.dueDate) : null,
        maxScore: Number(req.body.maxScore ?? 100),
        createdBy: req.user!.sub,
        tenantId: req.user!.tenantId,
      },
    });

    return res.status(201).json({ success: true, data: assignment });
  });

  app.post('/api/v1/assignments/:id/submissions', requireAuth, requireRole(Role.STUDENT), async (req, res) => {
    const submission = await prisma.submission.create({
      data: {
        assignmentId: req.params.id,
        studentId: req.body.studentId ?? req.user!.sub,
        fileUrl: req.body.fileUrl,
        feedback: req.body.feedback,
        tenantId: req.user!.tenantId,
      },
    });

    return res.status(201).json({ success: true, data: submission });
  });

  app.get('/api/v1/grades', requireAuth, async (req, res) => {
    const studentId = req.query.studentId as string | undefined;
    const grades = await prisma.grade.findMany({
      where: {
        tenantId: req.user!.tenantId,
        ...(studentId ? { studentId } : {}),
      },
      include: { subject: true },
    });

    return res.json({ success: true, data: grades });
  });

  app.post('/api/v1/grades', requireAuth, requireRole(Role.TEACHER, Role.ADMIN), async (req, res) => {
    const grade = await prisma.grade.create({
      data: {
        studentId: req.body.studentId,
        subjectId: req.body.subjectId,
        term: req.body.term,
        assessmentType: req.body.assessmentType,
        score: Number(req.body.score),
        maxScore: Number(req.body.maxScore),
        tenantId: req.user!.tenantId,
      },
    });

    return res.status(201).json({ success: true, data: grade });
  });

  app.get('/api/v1/announcements', requireAuth, async (req, res) => {
    const announcements = await prisma.announcement.findMany({
      where: { tenantId: req.user!.tenantId },
      orderBy: { publishedAt: 'desc' },
    });

    return res.json({ success: true, data: announcements });
  });

  app.post('/api/v1/announcements', requireAuth, requireRole(Role.ADMIN, Role.TEACHER), async (req, res) => {
    const announcement = await prisma.announcement.create({
      data: {
        title: req.body.title,
        body: req.body.body,
        audienceRole: req.body.audienceRole,
        classId: req.body.classId,
        createdBy: req.user!.sub,
        tenantId: req.user!.tenantId,
      },
    });

    return res.status(201).json({ success: true, data: announcement });
  });

  app.get('/api/v1/audit-logs', requireAuth, requireRole(Role.ADMIN), async (req, res) => {
    const logs = await prisma.auditLog.findMany({
      where: { tenantId: req.user!.tenantId },
      orderBy: { timestamp: 'desc' },
      take: 50,
    });

    return res.json({ success: true, data: logs });
  });
}
