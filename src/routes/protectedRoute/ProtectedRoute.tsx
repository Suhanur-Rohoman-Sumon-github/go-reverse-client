import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { useToken } from "../../redux/fetures/auth/auth.slice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useToken);

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
