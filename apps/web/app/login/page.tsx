export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';

export type UserSession = {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  email: string;
};

export const STORAGE_KEY = 'deped-user-session';

export const demoAccounts = [
  { label: 'Admin', email: 'admin@school.local', password: 'Admin123!', role: 'ADMIN' as UserRole, name: 'Maria Santos', avatar: 'MS' },
  { label: 'Teacher', email: 'teacher@school.local', password: 'Teacher123!', role: 'TEACHER' as UserRole, name: 'Rafael Cruz', avatar: 'RC' },
  { label: 'Student', email: 'student@school.local', password: 'Student123!', role: 'STUDENT' as UserRole, name: 'Alyssa Reyes', avatar: 'AR' },
  { label: 'Parent', email: 'parent@school.local', password: 'Parent123!', role: 'PARENT' as UserRole, name: 'Liza Gomez', avatar: 'LG' },
];

export const defaultUserSession: UserSession = demoAccounts[0];

export function getStoredSession(): UserSession {
  if (typeof window === 'undefined') return defaultUserSession;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultUserSession;
    const parsed = JSON.parse(raw) as UserSession;
    if (!parsed?.email || !parsed?.role) return defaultUserSession;
    return parsed;
  } catch {
    return defaultUserSession;
  }
}

export function setStoredSession(session: UserSession) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearStoredSession() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function getRoleLabel(role: UserRole) {
  return {
    ADMIN: 'Administrator',
    TEACHER: 'Teacher',
    STUDENT: 'Student',
    PARENT: 'Parent',
  }[role];
}
