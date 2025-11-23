import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl">Welcome {user?.name}</h1>
      <p>Your role: {user?.role}</p>
    </div>
  );
}
