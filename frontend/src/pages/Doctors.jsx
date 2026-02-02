import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Doctors() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Doctors</h2>

          <table className="w-full bg-white shadow rounded">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Specialization</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Dr. Sharma</td>
                <td className="p-3">Cardiology</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
