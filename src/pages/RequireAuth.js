import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function RequireAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}

export { RequireAuth };
