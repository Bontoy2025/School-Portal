const auditLogs = [
  { action: 'Created student profile', user: 'admin@school.local', timestamp: '2026-11-02 09:00' },
  { action: 'Marked attendance', user: 'teacher@school.local', timestamp: '2026-11-02 11:30' },
  { action: 'Published announcement', user: 'admin@school.local', timestamp: '2026-11-02 14:00' },
];

export default function AuditLogsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Audit Logs</h1>
        <div className="mt-6 space-y-4">
          {auditLogs.map((log) => (
            <div key={`${log.action}-${log.timestamp}`} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
              <p className="font-semibold">{log.action}</p>
              <p className="mt-1 text-sm text-slate-600">User: {log.user}</p>
              <p className="mt-1 text-xs text-slate-500">{log.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
