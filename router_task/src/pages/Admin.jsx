import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Admin() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const auth = params.get("auth");
    if (auth !== "true") {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Admin Dashboard</h1>

        <p className="text-gray-700 text-center mb-6">
          Welcome, Admin! Here's a quick overview of your controls and tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-blue-800 shadow">
            <h2 className="text-lg font-semibold mb-2">Manage Users</h2>
            <p className="text-sm">View, approve, or remove platform users.</p>
          </div>

          <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-blue-800 shadow">
            <h2 className="text-lg font-semibold mb-2">View Reports</h2>
            <p className="text-sm">Access system logs and usage reports.</p>
          </div>

          <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-blue-800 shadow">
            <h2 className="text-lg font-semibold mb-2">Post Announcements</h2>
            <p className="text-sm">Communicate with all registered users easily.</p>
          </div>

          <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-blue-800 shadow">
            <h2 className="text-lg font-semibold mb-2">Settings</h2>
            <p className="text-sm">Update application-wide configurations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
