# School Portal Monolith

A modular monolith MVP for a school portal with role-based access for Admin, Teacher, Student, and Parent users.

## Stack
- Next.js App Router + TypeScript + Tailwind
- Express + TypeScript API
- Prisma + PostgreSQL
- JWT auth with refresh tokens
- Redis + BullMQ ready
- Docker + Docker Compose

## Monorepo structure
- apps/api - backend API
- apps/web - frontend app
- packages/shared - shared constants/types
- prisma - database schema and seed data
- docs - architecture and planning docs

## Quick start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
```

### 3. Start PostgreSQL and Redis
```bash
docker-compose up -d postgres redis
```

### 4. Run Prisma migrations
```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

### 5. Run app
```bash
npm run dev
```

The API runs on http://localhost:4000 and the web app on http://localhost:3000.

## MVP modules in scope
- Authentication and JWT refresh flow
- Admin user creation and role assignment
- Student profile and class assignment
- Teacher profile and assignments
- Attendance tracking
- Timetable management
- Announcements
- Audit logging
- Role-based dashboards

## Phase 1 next steps
- Assignments, grades, fees, messaging
- Multi-tenancy support
- S3 file uploads
- OpenAPI generation and stricter contract testing

## Default seeded accounts
- admin@school.local / Admin123!
- teacher@school.local / Teacher123!
- student@school.local / Student123!
- parent@school.local / Parent123!
