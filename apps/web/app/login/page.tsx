import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">School Portal</p>
        <h1 className="mt-4 text-3xl font-bold">Sign in</h1>
        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-0" placeholder="admin@school.local" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-0" placeholder="••••••••" />
          </div>
          <div className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">
            Demo accounts: admin, teacher, student, parent
          </div>
          <button type="submit" className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white hover:bg-cyan-500">
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-600">
          <Link href="/dashboard" className="font-semibold text-cyan-700">
            Continue to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
