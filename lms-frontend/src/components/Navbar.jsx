import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white flex items-center px-6"
         style={{ height: "64px" }}>

      {/* LEFT — role-based links */}
      <div className="flex gap-4 flex-1">
        {user?.role === "admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/users">Users</Link>
          </>
        )}

        {user?.role === "instructor" && (
          <>
            <Link to="/instructor">Dashboard</Link>
            <Link to="/instructor/create-course">Create Course</Link>
            <Link to="/instructor/my-courses">My Courses</Link>
          </>
        )}

        {user?.role === "student" && (
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/student/courses">Courses</Link>
            <Link to="/student/enrollments">My Enrollments</Link>
          </>
        )}
      </div>

      {/* CENTER — Heading */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-xl font-semibold">Learning Management System</h1>
      </div>

      {/* RIGHT — Logout */}
      <div className="flex-1 flex justify-end">
        {user && (
          <button
            className="bg-red-500 px-3 py-1 rounded"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}
