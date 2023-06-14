import { Navigate, Outlet } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

export const routesJournal = [
  {
    path: "/",
    element: <JournalPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export const JournalRoutes = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
