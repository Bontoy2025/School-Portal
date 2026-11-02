const attendance = [
  { student: 'Amina Yusuf', status: 'Present', period: '1' },
  { student: 'Paul Okafor', status: 'Late', period: '2' },
  { student: 'Sarah Mensah', status: 'Absent', period: '3' },
];

export default function AttendancePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Attendance</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {attendance.map((item) => (
            <div key={item.student} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">{item.student}</p>
              <h2 className="mt-2 text-xl font-semibold">{item.status}</h2>
              <p className="mt-1 text-sm text-slate-600">Period {item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
