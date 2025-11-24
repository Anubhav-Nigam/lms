import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}</h1>
      <p className="mb-4">Role: {user?.role}</p>

      <div className="flex flex-col gap-4 max-w-sm">
        <Link
          to="/student/courses"
          className="p-3 bg-blue-600 text-white rounded"
        >
          View All Courses
        </Link>

        <Link
          to="/student/enrollments"
          className="p-3 bg-green-600 text-white rounded"
        >
          My Enrollments
        </Link>
      </div>
    </div>
  );
}
