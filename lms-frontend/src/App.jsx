import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

// Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Dashboards
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

// Admin pages
import AdminUsers from "./pages/admin/AdminUsers";

// Instructor pages
import CreateCourse from "./pages/instructor/CreateCourse";
import MyCourses from "./pages/instructor/MyCourses";

// Student pages
import AllCourses from "./pages/student/AllCourses";
import MyEnrollments from "./pages/student/MyEnrollments";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Common Dashboard after login */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin", "instructor", "student"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* ========== ADMIN ROUTES ========== */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminUsers />
              </ProtectedRoute>
            }
          />

          {/* ========== INSTRUCTOR ROUTES ========== */}
          <Route
            path="/instructor"
            element={
              <ProtectedRoute allowedRoles={["instructor"]}>
                <InstructorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/instructor/create-course"
            element={
              <ProtectedRoute allowedRoles={["instructor"]}>
                <CreateCourse />
              </ProtectedRoute>
            }
          />

          <Route
            path="/instructor/my-courses"
            element={
              <ProtectedRoute allowedRoles={["instructor"]}>
                <MyCourses />
              </ProtectedRoute>
            }
          />

          {/* ========== STUDENT ROUTES ========== */}
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/courses"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <AllCourses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/enrollments"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <MyEnrollments />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
