"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, PanelLeftClose, PanelLeftOpen, X } from 'lucide-react';
import { menuConfig, type MenuConfigGroup } from '@/config/menuConfig';
import { mockUserSession } from '@/lib/mock-session';

export default function Sidebar() {
  const pathname = usePathname();
  const role = mockUserSession.role;
  const menu = menuConfig[role];
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = window.localStorage.getItem('deped-sidebar-collapsed');
    if (stored) {
      setIsDesktopCollapsed(stored === 'true');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('deped-sidebar-collapsed', String(isDesktopCollapsed));
  }, [isDesktopCollapsed]);

  useEffect(() => {
    const expandDefaults: Record<string, boolean> = {};
    for (const item of menu) {
      if (item.children) {
        const isActive = item.children.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
        expandDefaults[item.title] = isActive;
      }
    }
    setExpandedGroups((prev) => ({ ...prev, ...expandDefaults }));
  }, [menu, pathname]);

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const navItemClasses = (isActive: boolean, collapsed = false) =>
    `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
      isActive
        ? 'bg-blue-900 text-white shadow-sm'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    } ${collapsed ? 'justify-center px-2' : ''}`;

  const renderMenuItem = (item: MenuConfigGroup, index: number) => {
    const active = item.href ? pathname === item.href || pathname.startsWith(`${item.href}/`) : false;
    const Icon = item.icon;

    if (item.children) {
      const isExpanded = !!expandedGroups[item.title];
      return (
        <div key={`${item.title}-${index}`} className="space-y-1">
          <button
            type="button"
            aria-label={item.title}
            aria-expanded={isExpanded}
            onClick={() => toggleGroup(item.title)}
            className={navItemClasses(active, isDesktopCollapsed)}
          >
            {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
            {!isDesktopCollapsed ? <span className="flex-1">{item.title}</span> : null}
            {!isDesktopCollapsed ? (
              isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
            ) : null}
          </button>

          {!isDesktopCollapsed && isExpanded ? (
            <div className="ml-5 space-y-1 border-l border-slate-200 pl-3">
              {item.children.map((child) => {
                const childActive = pathname === child.href || pathname.startsWith(`${child.href}/`);
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      childActive ? 'bg-blue-50 font-semibold text-blue-800' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {child.title}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <Link
        key={item.href ?? item.title}
        href={item.href ?? '/dashboard'}
        onClick={() => setIsMobileOpen(false)}
        className={navItemClasses(active, isDesktopCollapsed)}
      >
        {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
        {!isDesktopCollapsed ? <span>{item.title}</span> : null}
      </Link>
    );
  };

  const sidebarContent = (
    <aside
      id="deped-sidebar"
      className={
        `h-full border-r border-slate-200 bg-white transition-all duration-300 ease-in-out ${
          isDesktopCollapsed ? 'w-20' : 'w-72'
        } ${!isDesktopCollapsed && isMobileOpen ? 'translate-x-0' : ''}`
      }
    >
      <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
        <div className={`flex items-center gap-3 ${isDesktopCollapsed ? 'justify-center' : ''}`}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900 text-sm font-black text-white">D</div>
          {!isDesktopCollapsed ? <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-800">DepEd</p>
            <p className="text-sm font-semibold text-slate-800">School Portal</p>
          </div> : null}
        </div>

        <button
          type="button"
          aria-label="Collapse sidebar"
          className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 md:inline-flex"
          onClick={() => setIsDesktopCollapsed((v) => !v)}
        >
          {isDesktopCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </button>
      </div>

      <nav className="space-y-2 p-3">
        {menu.map((item) => renderMenuItem(item, item.title))}
      </nav>
    </aside>
  );

  return (
    <>
      <div className="md:hidden">
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setIsMobileOpen(true)}
          className="fixed left-4 top-4 z-40 rounded-xl bg-blue-900 p-2.5 text-white shadow-lg transition hover:bg-blue-800"
        >
          <PanelLeftOpen className="h-5 w-5" />
        </button>

        <div
          aria-hidden={!isMobileOpen}
          className={`fixed inset-0 z-30 bg-slate-900/60 transition-opacity ${isMobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setIsMobileOpen(false)}
        />

        <div
          className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 bg-white transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900 text-sm font-black text-white">D</div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-800">DepEd</p>
                <p className="text-sm font-semibold text-slate-800">School Portal</p>
              </div>
            </div>
            <button type="button" aria-label="Close navigation menu" onClick={() => setIsMobileOpen(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="space-y-2 p-3">
            {menu.map((item) => renderMenuItem(item, item.title))}
          </nav>
        </div>
      </div>

      <div className="hidden h-screen md:block">{sidebarContent}</div>
    </>
  );
}
