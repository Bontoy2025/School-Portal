const roleCards = [
  { title: 'Admin', href: '/admin/users', accent: 'from-red-500 to-red-600' },
  { title: 'Teacher', href: '/attendance', accent: 'from-blue-500 to-blue-600' },
  { title: 'Student', href: '/students', accent: 'from-emerald-500 to-emerald-600' },
  { title: 'Parent', href: '/announcements', accent: 'from-violet-500 to-violet-600' }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Overview</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Role-based dashboard</h1>
          </div>
          <a href="/login" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">Back to login</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {roleCards.map((card) => (
            <a key={card.title} href={card.href} className="group rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className={`mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br ${card.accent}`} />
              <h2 className="text-2xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm text-slate-500">Access the {card.title.toLowerCase()} workspace and key school operations.</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
