import { createBrowserRouter } from "react-router-dom";
import Header from "../LayOut/Pages/Header";
import Blog from "../LayOut/Pages/Blog";
import Banner from "../LayOut/Pages/Banner";

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
      ]
    },
  ]);

  export default router;