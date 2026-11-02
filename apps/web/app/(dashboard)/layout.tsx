export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';

export const mockUserSession = {
  id: 'u-101',
  name: 'Maria Santos',
  role: 'ADMIN' as UserRole,
  avatar: 'MS',
  email: 'maria.santos@deped.gov.ph',
};

export function getRoleLabel(role: UserRole) {
  return {
    ADMIN: 'Administrator',
    TEACHER: 'Teacher',
    STUDENT: 'Student',
    PARENT: 'Parent',
  }[role];
}
