import {
  Bell,
  Briefcase,
  CalendarDays,
  ClipboardList,
  FileBarChart,
  FileText,
  GraduationCap,
  LayoutDashboard,
  NotebookPen,
  School,
  Settings,
  ShieldCheck,
  Users,
  UserCheck,
  WalletCards,
  BookOpen,
  ClipboardCheck,
  UserRound,
  FolderKanban,
  Clock3,
  BookMarked,
  BadgeCheck,
  NotebookTabs,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { UserRole } from '@/lib/mock-session';

export type MenuConfigGroup = {
  title: string;
  href?: string;
  icon?: LucideIcon;
  children?: { title: string; href: string }[];
};

export const menuConfig: Record<UserRole, MenuConfigGroup[]> = {
  ADMIN: [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    {
      title: 'Learner Information System (LIS)',
      icon: GraduationCap,
      children: [
        { title: 'Learner Profiles', href: '/dashboard/learners' },
        { title: 'Enrollment', href: '/dashboard/enrollment' },
        { title: 'Sections', href: '/dashboard/sections' },
      ],
    },
    { title: 'Attendance', href: '/dashboard/attendance', icon: ClipboardCheck },
    { title: 'Class Program / Timetable', href: '/dashboard/timetable', icon: CalendarDays },
    {
      title: 'Grades & Records',
      icon: FileText,
      children: [
        { title: 'Grade Encoding', href: '/dashboard/grades/encoding' },
        { title: 'Report Cards (Form 138)', href: '/dashboard/grades/report-cards' },
      ],
    },
    { title: 'Teachers & Staff', href: '/dashboard/staff', icon: Users },
    { title: 'Announcements', href: '/dashboard/announcements', icon: Bell },
    {
      title: 'Reports',
      icon: FileBarChart,
      children: [
        { title: 'SF1 / SF2 / SF5 / SF9 / SF10', href: '/dashboard/reports/forms' },
        { title: 'Attendance Reports', href: '/dashboard/reports/attendance' },
      ],
    },
    { title: 'School Settings', href: '/dashboard/settings', icon: Settings },
    { title: 'Audit Logs', href: '/dashboard/audit-logs', icon: ShieldCheck },
  ],
  TEACHER: [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { title: 'My Classes', href: '/dashboard/classes', icon: BookOpen },
    { title: 'Attendance', href: '/dashboard/attendance', icon: ClipboardCheck },
    { title: 'Class Program / Timetable', href: '/dashboard/timetable', icon: CalendarDays },
    { title: 'Assignments', href: '/dashboard/assignments', icon: NotebookPen },
    {
      title: 'Grades & Records',
      icon: FileText,
      children: [
        { title: 'Grade Encoding', href: '/dashboard/grades/encoding' },
        { title: 'Class Record', href: '/dashboard/grades/class-record' },
      ],
    },
    { title: 'Announcements', href: '/dashboard/announcements', icon: Bell },
    { title: 'Learner Profiles', href: '/dashboard/learners', icon: UserCheck },
  ],
  STUDENT: [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { title: 'My Profile', href: '/dashboard/profile', icon: UserRound },
    { title: 'My Attendance', href: '/dashboard/attendance', icon: ClipboardCheck },
    { title: 'Class Program / Timetable', href: '/dashboard/timetable', icon: CalendarDays },
    { title: 'Assignments', href: '/dashboard/assignments', icon: NotebookTabs },
    { title: 'My Grades', href: '/dashboard/grades', icon: BookMarked },
    { title: 'Announcements', href: '/dashboard/announcements', icon: Bell },
  ],
  PARENT: [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { title: 'My Child\'s Profile', href: '/dashboard/child-profile', icon: UserRound },
    { title: 'Attendance', href: '/dashboard/attendance', icon: ClipboardCheck },
    { title: 'Class Program / Timetable', href: '/dashboard/timetable', icon: CalendarDays },
    { title: 'Assignments', href: '/dashboard/assignments', icon: NotebookPen },
    { title: 'Grades', href: '/dashboard/grades', icon: BookMarked },
    { title: 'Announcements', href: '/dashboard/announcements', icon: Bell },
    { title: 'Invoices / Fees', href: '/dashboard/fees', icon: WalletCards },
  ],
};
