import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <p className="mb-6">Welcome, {user?.name}</p>

      <div className="flex flex-col gap-4 max-w-sm">
        <Link
          className="bg-blue-600 text-white p-3 rounded text-center"
          to="/admin/users"
        >
          Manage Users
        </Link>
      </div>
    </div>
  );
}
