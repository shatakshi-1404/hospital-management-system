import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/" },
  { name: "Doctors", path: "/doctors" },
  { name: "Patients", path: "/patients" },
  { name: "Appointments", path: "/appointments" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">🏥 Hospital MS</h1>

      <nav className="space-y-3">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-blue-900" : "hover:bg-blue-800"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
