import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import Login from "../pages/Authintication/Login";
import SignUp from "../pages/Authintication/SignUp";

  export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
          {
            path: 'instructor',
            element: <AllInstructor></AllInstructor>
          }
        ]
    }
  ])