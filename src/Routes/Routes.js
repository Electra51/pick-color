import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
          },
          {
            path: '/home',
            element:<Home></Home>
          },
          {
            path: '/login',
            element:<Login></Login>
          }
          ,
          {
            path: '/signup',
            element:<SignUp></SignUp>
      }
      ]
    },
]);
  
export default router;