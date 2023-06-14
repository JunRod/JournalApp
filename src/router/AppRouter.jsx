import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthRoutes, routesAuth } from "../auth/routes/AuthRoutes";
import { JournalRoutes, routesJournal } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useChekoutAuth } from "../hooks/useChekoutAuth";

const router1 = createBrowserRouter([
  {
    path: "auth/*",
    element: <AuthRoutes />,
    children: routesAuth,
  },
  {
    path: "*",
    element: <Navigate to={"auth/*"} />,
  },
]);

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <JournalRoutes />,
    children: routesJournal,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);

export const AppRouter = () => {

  const status = useChekoutAuth()

  if (status === "checking") 
    return <CheckingAuth />;

  return <RouterProvider router={status === "autheticated" ? router2 : router1 || <Navigate to={"auth"} />} />
};
