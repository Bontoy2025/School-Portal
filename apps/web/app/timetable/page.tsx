const schedule = [
  { day: 'Monday', subject: 'Mathematics', room: 'Room 101', teacher: 'Mr. Adebayo' },
  { day: 'Tuesday', subject: 'Physics', room: 'Lab 2', teacher: 'Mrs. Okafor' },
  { day: 'Wednesday', subject: 'English', room: 'Room 204', teacher: 'Ms. Evans' },
  { day: 'Thursday', subject: 'Chemistry', room: 'Lab 5', teacher: 'Mr. Bello' },
  { day: 'Friday', subject: 'ICT', room: 'Digital Lab', teacher: 'Ms. Daniels' }
];

export default function TimetablePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Timetable</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Class schedule</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Dashboard</a>
        </div>

        <div className="space-y-4">
          {schedule.map((entry) => (
            <div key={entry.day} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">{entry.day}</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">{entry.subject}</h2>
                </div>
                <div className="text-sm text-slate-600">
                  <p>Teacher: {entry.teacher}</p>
                  <p>Room: {entry.room}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
