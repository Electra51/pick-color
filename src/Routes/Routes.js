import Main from "../Layout/Main";
import Connect from "../Pages/Connect/Connect";
import Home from "../Pages/HomePage/Home";
import RgbToHex from "../Pages/RgbToHex/RgbToHex";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";
import PrivateRoute from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/connect',
        element: <Connect></Connect>
      },
      {
        path: '/convert',
        element: <PrivateRoute><RgbToHex></RgbToHex></PrivateRoute>
      },

      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/signup',
        element: <SignUp></SignUp>
      }

    ]
  },
]);

export default router;