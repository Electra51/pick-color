import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Connect from "../Pages/Connect/Connect";
import Home from "../Pages/HomePage/Home";
import RgbToHex from "../Pages/RgbToHex/RgbToHex";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/connect", element: <Connect /> },
      {
        path: "/convert",
        element: (
          <PrivateRoute>
            <RgbToHex />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

export default router;
