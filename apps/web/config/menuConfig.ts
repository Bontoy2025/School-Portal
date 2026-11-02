"use client";

import Link from 'next/link';
import { LogOut, Menu } from 'lucide-react';
import { RoleBadge } from '@/components/dashboard/role-badge';
import { mockUserSession } from '@/lib/mock-session';

export function Header({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const user = mockUserSession;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="flex h-16 items-center justify-between gap-3 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-sm font-black text-white">D</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-800">DepEd</p>
              <p className="text-base font-bold text-slate-900">School Portal</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-white">{user.avatar}</div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-800">{user.name}</p>
              <RoleBadge role={user.role}>{user.role}</RoleBadge>
            </div>
          </div>

          <Link
            href="/login"
            aria-label="Logout"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
