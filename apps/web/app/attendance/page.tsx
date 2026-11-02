const records = [
  { student: 'Amina Yusuf', status: 'Present', period: '1', date: '2026-11-02' },
  { student: 'Paul Okafor', status: 'Late', period: '2', date: '2026-11-02' },
  { student: 'Sarah Mensah', status: 'Absent', period: '3', date: '2026-11-02' }
];

export default function AttendancePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Attendance</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Daily records</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Dashboard</a>
        </div>

        <div className="space-y-4">
          {records.map((item) => (
            <div key={`${item.student}-${item.period}`} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{item.student}</h2>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Period {item.period}</span>
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-white bg-emerald-500">{item.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
