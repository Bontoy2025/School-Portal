const users = [
  { email: 'admin@school.local', role: 'ADMIN', status: 'Active' },
  { email: 'teacher@school.local', role: 'TEACHER', status: 'Active' },
  { email: 'student@school.local', role: 'STUDENT', status: 'Active' },
  { email: 'parent@school.local', role: 'PARENT', status: 'Active' }
];

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Users</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">User management</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Dashboard</a>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-5 py-4 font-semibold">Email</th>
                <th className="px-5 py-4 font-semibold">Role</th>
                <th className="px-5 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-t border-slate-200">
                  <td className="px-5 py-4">{user.email}</td>
                  <td className="px-5 py-4"><span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">{user.role}</span></td>
                  <td className="px-5 py-4"><span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{user.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
