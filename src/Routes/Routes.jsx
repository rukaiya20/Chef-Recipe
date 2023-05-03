import { createBrowserRouter } from "react-router-dom";
import Header from "../LayOut/Pages/Header";
import Blog from "../LayOut/Pages/Blog";
import Banner from "../LayOut/Pages/Banner";
import Login from "../LayOut/Pages/Login";
import Register from "../LayOut/Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,
      children:[
        {
          path: "/",
         element: <Banner></Banner>,
        },
        {
          path: "/blog",
         element: <Blog></Blog>,
        },
        {
          path: "/login",
         element: <Login></Login>,
        },
        {
          path: "/register",
         element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;