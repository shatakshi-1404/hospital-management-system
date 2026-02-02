import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex min-h-screen bg-slate-100">
                <Sidebar />
                <div className="flex-1">
                  <Topbar />
                  <div className="p-6">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/doctors" element={<Doctors />} />
                      <Route path="/patients" element={<Patients />} />
                      <Route path="/appointments" element={<Appointments />} />
                      <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
