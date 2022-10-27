import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseList from "../../Pages/CourseList/CourseList/CourseList";
import Courses from "../../Pages/Courses/Courses/Courses";
import Errors from "../../Pages/Errors/Errors";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PremiumCourses from "../../Pages/PremiumCourses/PremiumCourses";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errors></Errors>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <CourseList></CourseList>,
        loader: () =>
          fetch("https://tutorial-points-server.vercel.app/courses"),
      },

      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://tutorial-points-server.vercel.app/courses/${params.id}`
          ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/premium",
        element: (
          <PrivateRoute>
            {" "}
            <PremiumCourses></PremiumCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
