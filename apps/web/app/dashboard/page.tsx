const cards = [
  { label: 'Admin', href: '/admin/users', accent: 'bg-red-500' },
  { label: 'Teacher', href: '/attendance', accent: 'bg-blue-500' },
  { label: 'Student', href: '/students', accent: 'bg-emerald-500' },
  { label: 'Parent', href: '/announcements', accent: 'bg-violet-500' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-slate-600">Welcome to the School Portal MVP.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <a key={card.label} href={card.href} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
              <div className={`mb-4 h-12 w-12 rounded-xl ${card.accent}`} />
              <h2 className="text-xl font-semibold">{card.label}</h2>
              <p className="mt-2 text-sm text-slate-600">View role-specific portal sections.</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
