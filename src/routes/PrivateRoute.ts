import React, { ReactNode } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Location } from "history";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { isLoggedIn, isLoading } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (!isLoggedIn) {
    // Redirect to the login page and pass the current pathname as state to use it later
    return <Navigate to="/login" state={{ from: pathname }} />;
  }

  return children;
}
