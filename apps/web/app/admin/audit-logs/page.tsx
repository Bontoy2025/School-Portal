const logs = [
  { user: 'admin@school.local', action: 'Created student record', time: '2026-11-02 09:14', entity: 'Student' },
  { user: 'teacher@school.local', action: 'Marked attendance', time: '2026-11-02 11:42', entity: 'Attendance' },
  { user: 'admin@school.local', action: 'Published announcement', time: '2026-11-02 14:21', entity: 'Announcement' }
];

export default function AuditLogsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Audit</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Audit logs</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Dashboard</a>
        </div>

        <div className="space-y-4">
          {logs.map((log) => (
            <div key={`${log.user}-${log.time}`} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{log.action}</h2>
                  <p className="text-sm text-slate-500">{log.user} · {log.entity}</p>
                </div>
                <span className="text-xs font-medium text-slate-500">{log.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
