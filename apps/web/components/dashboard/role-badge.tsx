import { ReactNode } from 'react';

export function RoleBadge({ role, children }: { role: string; children?: ReactNode }) {
  const roles: Record<string, string> = {
    ADMIN: 'bg-red-100 text-red-700',
    TEACHER: 'bg-blue-100 text-blue-700',
    STUDENT: 'bg-emerald-100 text-emerald-700',
    PARENT: 'bg-violet-100 text-violet-700',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${roles[role] ?? 'bg-slate-100 text-slate-700'}`}>
      {children ?? role}
    </span>
  );
}
