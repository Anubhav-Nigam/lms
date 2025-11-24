import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses/my")
      .then((res) => setCourses(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>

      {courses.length === 0 ? (
        <p>No courses created yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courses.map((c) => (
            <div key={c.id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2">{c.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Created: {new Date(c.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
