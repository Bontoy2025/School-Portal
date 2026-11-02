import './globals.css';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-10 shadow-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">School Portal</p>
        <h1 className="text-4xl font-bold">Role-based School Management</h1>
        <p className="mt-4 max-w-xl text-slate-300">
          A modular monolith for Admin, Teacher, Student, and Parent workflows.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/login" className="rounded bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
            Login
          </Link>
          <Link href="/dashboard" className="rounded border border-slate-600 px-5 py-3 font-semibold text-white hover:bg-slate-800">
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
