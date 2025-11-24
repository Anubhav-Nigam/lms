import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const enroll = async (id) => {
    setMessage("");
    try {
      await api.post(`/enroll/${id}`);
      setMessage("Enrolled successfully!");
    } catch (err) {
      setMessage("Enrollment failed");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">All Courses</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <div key={c.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mt-2">{c.description}</p>

            <button
              className="mt-4 bg-blue-600 text-white p-2 rounded"
              onClick={() => enroll(c.id)}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
