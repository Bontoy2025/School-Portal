const notices = [
  { title: 'Annual parent meeting', body: 'The annual PTA meeting will be held on Saturday at 9:00 AM in the main hall.', type: 'Community' },
  { title: 'Midterm exam schedule', body: 'Students should check the exam timetable before the end of the week.', type: 'Academic' },
  { title: 'School uniform reminder', body: 'All students should wear the official school uniform beginning next Monday.', type: 'General' }
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Announcements</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Latest news</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Dashboard</a>
        </div>

        <div className="space-y-5">
          {notices.map((notice) => (
            <article key={notice.title} className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900">{notice.title}</h2>
                <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700">{notice.type}</span>
              </div>
              <p className="mt-3 text-slate-600">{notice.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
