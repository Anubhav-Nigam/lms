import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

export default function MyEnrollments() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadEnrollments();
  }, []);

  const loadEnrollments = async () => {
    try {
      const res = await api.get("/enroll/my");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">My Enrollments</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <div key={c.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mt-2">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
