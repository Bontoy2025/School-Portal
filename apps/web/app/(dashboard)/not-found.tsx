import { AlertCircle, ArrowRight, Bell, BookOpen, CalendarDays, ClipboardCheck, FileText, GraduationCap, TimerReset } from 'lucide-react';
import { DashboardCard } from '@/components/dashboard/dashboard-card';
import { mockUserSession } from '@/lib/mock-session';

const roleContent: Record<string, any> = {
  ADMIN: {
    heading: 'School Operations Overview',
    subheading: 'Monitor learner services, attendance, records, and communications.',
    stats: [
      { title: 'Total Learners', value: '2,480', subtitle: '+112 this month', tone: 'blue', icon: <GraduationCap className="h-5 w-5" /> },
      { title: 'Total Teachers', value: '184', subtitle: '8 new entries', tone: 'yellow', icon: <BookOpen className="h-5 w-5" /> },
      { title: 'Attendance Rate', value: '94.8%', subtitle: 'Today: 1,884 present', tone: 'green', icon: <ClipboardCheck className="h-5 w-5" /> },
      { title: 'Pending Grade Submissions', value: '37', subtitle: 'Due by Friday', tone: 'red', icon: <FileText className="h-5 w-5" /> },
    ],
    quickActions: ['Add Learner', 'Mark Attendance', 'Publish Announcement'],
    announcements: [
      { title: 'School Calendar Update', detail: 'The division has released the updated Q4 schedule for school activities.' },
      { title: 'Grade Submission Reminder', detail: 'Teachers are reminded to encode grades before the deadline.' },
    ],
  },
  TEACHER: {
    heading: 'My Teaching Dashboard',
    subheading: 'Track rosters, attendance, tasks, and learner records efficiently.',
    stats: [
      { title: 'Classes Today', value: '5', subtitle: '2 sections in Grade 10', tone: 'blue', icon: <BookOpen className="h-5 w-5" /> },
      { title: 'Attendance to Mark', value: '68', subtitle: 'Across 3 class sections', tone: 'yellow', icon: <ClipboardCheck className="h-5 w-5" /> },
      { title: 'Assignments Due', value: '4', subtitle: '2 due this week', tone: 'green', icon: <FileText className="h-5 w-5" /> },
      { title: 'Recent Submissions', value: '29', subtitle: 'Awaiting review', tone: 'red', icon: <TimerReset className="h-5 w-5" /> },
    ],
    quickActions: ['Mark Attendance', 'Create Assignment', 'Review Submissions'],
    announcements: [
      { title: 'Parent Meeting', detail: 'The PTA advisory meeting is scheduled for Friday after class.' },
      { title: 'Class Record Reminder', detail: 'Please update the class record before the end of the week.' },
    ],
  },
  STUDENT: {
    heading: 'Student Dashboard',
    subheading: 'Review your schedule, records, and school updates.',
    stats: [
      { title: 'Today\'s Schedule', value: '5 periods', subtitle: 'Math, Science, English, PE, ICT', tone: 'blue', icon: <CalendarDays className="h-5 w-5" /> },
      { title: 'Attendance', value: '96.2%', subtitle: '4 absences this term', tone: 'green', icon: <ClipboardCheck className="h-5 w-5" /> },
      { title: 'Pending Assignments', value: '3', subtitle: '2 due this week', tone: 'yellow', icon: <FileText className="h-5 w-5" /> },
      { title: 'Latest Grades', value: '90+ avg', subtitle: 'Science and Math strong', tone: 'red', icon: <BookOpen className="h-5 w-5" /> },
    ],
    quickActions: ['View Timetable', 'Open Assignments', 'Check Grades'],
    announcements: [
      { title: 'Orientation for New Learners', detail: 'Students must attend the orientation on Monday morning.' },
      { title: 'School Supplies', detail: 'The learning materials list is now available in the portal.' },
    ],
  },
  PARENT: {
    heading: 'Parent Dashboard',
    subheading: 'Track your child’s academic progress and school updates.',
    stats: [
      { title: 'Child Attendance', value: '95.6%', subtitle: '2 late records this month', tone: 'blue', icon: <ClipboardCheck className="h-5 w-5" /> },
      { title: 'Latest Grades', value: '88.4 avg', subtitle: 'English remains above target', tone: 'yellow', icon: <BookOpen className="h-5 w-5" /> },
      { title: 'Pending Assignments', value: '2', subtitle: 'Due this week', tone: 'green', icon: <FileText className="h-5 w-5" /> },
      { title: 'Fee Status', value: 'Paid', subtitle: 'No outstanding balance', tone: 'red', icon: <Bell className="h-5 w-5" /> },
    ],
    quickActions: ['View Child Profile', 'Check Grades', 'Open Announcements'],
    announcements: [
      { title: 'Mass PTA Meeting', detail: 'The school will host a parent orientation on Saturday morning.' },
      { title: 'School Fee Notice', detail: 'The final installment for the school year is due by next Friday.' },
    ],
  },
};

export default function DashboardPage() {
  const user = mockUserSession;
  const section = roleContent[user.role] ?? roleContent.ADMIN;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">Welcome</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{section.heading}</h1>
          <p className="mt-2 text-slate-600">{section.subheading}</p>
        </div>
        <div className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-800">
          {user.name} · {user.role}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {section.stats.map((stat: any, index: number) => (
          <DashboardCard
            key={`${stat.title}-${index}`}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            tone={stat.tone}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Quick Actions</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">Common tasks</h2>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {section.quickActions.map((action: string) => (
              <button
                key={action}
                type="button"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Announcements</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">Recent updates</h2>
            </div>
            <Bell className="h-5 w-5 text-slate-400" />
          </div>

          <div className="space-y-3">
            {section.announcements.map((item: any, index: number) => (
              <div key={`${item.title}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">Status</h2>
        </div>
        <p className="text-slate-600">
          All school operations modules are available for your role. Use the left sidebar to access DepEd workflows, resource reports, and learner information tools.
        </p>
      </div>
    </div>
  );
}
