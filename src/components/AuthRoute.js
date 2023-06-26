import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";

export function AuthRoute({ children }) {
  const [session] = useContext(SessionContext);

  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
}
