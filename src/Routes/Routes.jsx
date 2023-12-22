import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";

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
        element: <DashboardLayout />,
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
