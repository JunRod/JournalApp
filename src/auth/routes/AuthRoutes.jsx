import { Navigate, Outlet } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const routesAuth = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <Navigate to="/auth/login" />,
  },
];

export const AuthRoutes = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
