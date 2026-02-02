import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Doctors" value="12" />
        <StatCard title="Patients" value="320" />
        <StatCard title="Appointments" value="45" />
        <StatCard title="Revenue" value="₹1.2L" />
      </div>
    </div>
  );
}
