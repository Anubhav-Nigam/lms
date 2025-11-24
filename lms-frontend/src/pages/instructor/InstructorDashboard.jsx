// src/pages/instructor/InstructorDashboard.jsx

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function InstructorDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">
        Instructor Dashboard
      </h1>

      <p className="text-lg mb-6">Welcome, {user?.name}</p>

      <div className="flex flex-col gap-4 max-w-sm">
        <Link
          to="/instructor/create-course"
          className="bg-blue-600 text-white p-3 rounded text-center"
        >
          ➕ Create Course
        </Link>

        <Link
          to="/instructor/my-courses"
          className="bg-green-600 text-white p-3 rounded text-center"
        >
          📚 View My Courses
        </Link>
      </div>
    </div>
  );
}
