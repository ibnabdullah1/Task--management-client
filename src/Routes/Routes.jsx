import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: <Contact />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
