export default function StudentDetailsPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Student</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Student Profile</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Student ID</p>
            <p className="mt-2 text-xl font-bold text-slate-900">{params.id}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Class</p>
            <p className="mt-2 text-xl font-bold text-slate-900">Grade 10 - Science</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Guardian</p>
            <p className="mt-2 text-xl font-bold text-slate-900">Mrs. Yusuf</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Attendance</p>
            <p className="mt-2 text-xl font-bold text-slate-900">92%</p>
          </div>
        </div>
      </div>
    </main>
  );
}
