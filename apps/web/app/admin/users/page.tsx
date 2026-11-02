const users = [
  { email: 'admin@school.local', role: 'ADMIN' },
  { email: 'teacher@school.local', role: 'TEACHER' },
  { email: 'student@school.local', role: 'STUDENT' },
  { email: 'parent@school.local', role: 'PARENT' },
];

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Admin / Users</h1>
        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-t border-slate-200">
                  <td className="px-5 py-3">{user.email}</td>
                  <td className="px-5 py-3">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
