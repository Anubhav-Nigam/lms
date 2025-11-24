import { useState } from "react";
import api from "../../api/axiosInstance";

export default function CreateCourse() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await api.post("/courses/create", form);
      setMessage("Course created successfully!");
    } catch (err) {
      setMessage("Error creating course");
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create New Course</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Course Title"
          className="border p-2"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Course Description"
          className="border p-2 h-32"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Create Course
        </button>
      </form>
    </div>
  );
}
