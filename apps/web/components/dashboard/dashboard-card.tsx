import { ReactNode } from 'react';

export type DashboardCardTone = 'blue' | 'yellow' | 'gray' | 'green' | 'red';

export function DashboardCard({
  title,
  value,
  subtitle,
  tone = 'blue',
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  tone?: DashboardCardTone;
  icon?: ReactNode;
}) {
  const tones: Record<DashboardCardTone, string> = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-100',
    yellow: 'bg-yellow-50 text-yellow-700 ring-yellow-100',
    gray: 'bg-slate-100 text-slate-700 ring-slate-200',
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    red: 'bg-red-50 text-red-700 ring-red-100',
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-black tracking-tight text-slate-900">{value}</p>
        </div>
        {icon ? <div className={`rounded-xl p-3 ring-1 ${tones[tone]}`}>{icon}</div> : null}
      </div>
      <p className="mt-3 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}
