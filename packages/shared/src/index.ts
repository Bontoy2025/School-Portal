export type Role = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
};

export type TokenPayload = {
  sub: string;
  email: string;
  role: Role;
  tenantId: string;
};

export const roleOptions: Role[] = ['ADMIN', 'TEACHER', 'STUDENT', 'PARENT'];

export const permissionMap: Record<Role, string[]> = {
  ADMIN: ['*'],
  TEACHER: ['attendance:write', 'attendance:read', 'assignment:write', 'subject:read', 'timetable:read', 'student:read'],
  STUDENT: ['student:read:self', 'attendance:read:self', 'announcement:read', 'assignment:read:self', 'grade:read:self'],
  PARENT: ['child:read', 'attendance:read:child', 'grade:read:child', 'announcement:read']
};
