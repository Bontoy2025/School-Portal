export enum Role {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT'
}

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
  iat?: number;
  exp?: number;
};

export const permissionMap: Record<Role, string[]> = {
  [Role.ADMIN]: ['*'],
  [Role.TEACHER]: ['attendance:write', 'assignment:write', 'timetable:read', 'student:read'],
  [Role.STUDENT]: ['student:read:self', 'attendance:read:self', 'announcement:read', 'assignment:read:self', 'grade:read:self'],
  [Role.PARENT]: ['child:read', 'attendance:read:child', 'grade:read:child', 'announcement:read']
};
