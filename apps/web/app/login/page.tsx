import Link from 'next/link';

const demoAccounts = [
  { label: 'Admin', email: 'admin@school.local', password: 'Admin123!' },
  { label: 'Teacher', email: 'teacher@school.local', password: 'Teacher123!' },
  { label: 'Student', email: 'student@school.local', password: 'Student123!' },
  { label: 'Parent', email: 'parent@school.local', password: 'Parent123!' }
];

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">School Portal</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900">Sign in</h1>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" defaultValue="admin@school.local" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none ring-0 focus:border-cyan-500" />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input id="password" type="password" defaultValue="Admin123!" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none ring-0 focus:border-cyan-500" />
          </div>

          <button type="submit" className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500">
            Sign In
          </button>
        </form>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <p className="mb-3 text-sm font-semibold text-slate-700">Demo credentials</p>
          <div className="space-y-2 text-sm text-slate-600">
            {demoAccounts.map((account) => (
              <div key={account.label} className="flex items-center justify-between gap-3 rounded-lg bg-white px-2 py-2 ring-1 ring-slate-200">
                <span>{account.label}</span>
                <span className="text-xs text-slate-500">{account.email}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-600">
          <Link href="/dashboard" className="font-semibold text-cyan-700">Go to dashboard →</Link>
        </div>
      </div>
    </main>
  );
}
