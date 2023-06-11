import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import Login from "../pages/Authintication/Login";
import SignUp from "../pages/Authintication/SignUp";
import NotFound from "../pages/NotFound";
import DashBoard from "../pages/DashBoard/DashBoard/DashBoard";
import PrivateRoutes from "./PrivateRoutes";
import AllClasses from "../pages/AllClasses/AllClasses";
import AddClass from "../pages/DashBoard/AddClass/AddClass";
import InstructorClasses from "../pages/DashBoard/InstructorClasses/InstructorClasses";
import InstructorRoutes from "./InstructorRoutes";
import ManageClasses from "../pages/DashBoard/ManageClasses/ManageClasses";
import AdminRoutes from "./AdminRoutes";
import ManageUser from "../pages/DashBoard/ManageUser/ManageUser";

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
          },
          {
            path: '/allclasses',
            element: <AllClasses></AllClasses>
          },
          {
            path: '/dashboard',
            element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
            children:[
              {
                path: 'addclass',
                element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
              },
              {
                path: 'instructorclasses',
                element: <InstructorRoutes><InstructorClasses></InstructorClasses></InstructorRoutes>
              },
              {
                path: 'manageclasses',
                element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
              },
              {
                path: 'manageusers',
                element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
              }
            ]
          }
        ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])