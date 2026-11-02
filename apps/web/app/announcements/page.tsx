const announcements = [
  { title: 'Midterm exams schedule', body: 'The midterm exams will run from the 12th to the 16th of this month.', type: 'Academic' },
  { title: 'Parent-teacher meeting', body: 'Please attend the P.T.A. meeting on Saturday at 9am.', type: 'Community' },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Announcements</h1>
        <div className="mt-6 space-y-5">
          {announcements.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-800">{item.type}</span>
              </div>
              <p className="mt-3 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
