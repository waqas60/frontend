import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
