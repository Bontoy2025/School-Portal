"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { demoAccounts, setStoredSession } from '@/lib/mock-session';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '').trim();
    const password = String(form.get('password') ?? '');

    const matchedUser = demoAccounts.find(
      (account) => account.email.toLowerCase() === email.toLowerCase() && account.password === password,
    );

    if (!matchedUser) {
      setError('Invalid email or password. Try one of the demo accounts below.');
      return;
    }

    setStoredSession({
      id: matchedUser.email,
      name: matchedUser.name,
      role: matchedUser.role,
      avatar: matchedUser.avatar,
      email: matchedUser.email,
    });

    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">School Portal</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900">Sign in</h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input id="email" name="email" type="email" defaultValue="admin@school.local" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none focus:border-cyan-500" required />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input id="password" name="password" type="password" defaultValue="Admin123!" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none focus:border-cyan-500" required />
          </div>

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
          ) : null}

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
