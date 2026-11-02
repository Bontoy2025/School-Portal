const timetable = [
  { day: 'Monday', subject: 'Mathematics', room: 'Room 101', teacher: 'Mr. Adebayo' },
  { day: 'Tuesday', subject: 'Physics', room: 'Lab 2', teacher: 'Mrs. Okafor' },
  { day: 'Wednesday', subject: 'English', room: 'Room 204', teacher: 'Ms. Evans' },
];

export default function TimetablePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Timetable</h1>
        <div className="mt-6 space-y-4">
          {timetable.map((slot) => (
            <div key={slot.day} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{slot.day}</h2>
                <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-semibold text-cyan-800">{slot.room}</span>
              </div>
              <p className="mt-2 text-slate-600">{slot.subject}</p>
              <p className="text-sm text-slate-500">Teacher: {slot.teacher}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
