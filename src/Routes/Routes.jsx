import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllInstructor from "../pages/AllInstructor/AllInstructor";

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
            path: 'instructor',
            element: <AllInstructor></AllInstructor>
          }
        ]
    }
  ])