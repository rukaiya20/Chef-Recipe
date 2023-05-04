import { createBrowserRouter } from "react-router-dom";
import Header from "../LayOut/Pages/Header";
import Blog from "../LayOut/Pages/Blog";
import Banner from "../LayOut/Pages/Banner";
import Login from "../LayOut/Pages/Login";
import Register from "../LayOut/Pages/Register";
import ChefCard from "../LayOut/Pages/Cards/ChefCard";
import RecipeCard from "../LayOut/Pages/Cards/RecipeCard";
import ChefProfile from "../LayOut/Pages/Cards/ChefProfile";

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
          path: "/",
         element: <ChefCard></ChefCard>,
        },
        {
          path: "/recipe",
         element: <RecipeCard></RecipeCard>,
        },
        {
          path: "/chef/:id",
         element: <ChefProfile></ChefProfile>,
         loader :({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
        },
        {
          path: "/register",
         element: <Register></Register>,
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
          path: "/recipe",
         element: <RecipeCard></RecipeCard>,
        },
      ]
    },
  ]);

  export default router;