const students = [
  { name: 'Amina Yusuf', className: 'Grade 10', id: 'ST-001' },
  { name: 'Paul Okafor', className: 'Grade 11', id: 'ST-002' },
  { name: 'Sarah Mensah', className: 'Grade 9', id: 'ST-003' },
];

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Students</h1>
        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Student ID</th>
                <th className="px-5 py-3">Class</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-t border-slate-200">
                  <td className="px-5 py-3">{student.name}</td>
                  <td className="px-5 py-3">{student.id}</td>
                  <td className="px-5 py-3">{student.className}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
