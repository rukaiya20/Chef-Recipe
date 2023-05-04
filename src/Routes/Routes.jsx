import { createBrowserRouter } from "react-router-dom";
import Header from "../LayOut/Pages/Header";
import Blog from "../LayOut/Pages/Blog";
import Banner from "../LayOut/Pages/Banner";
import Login from "../LayOut/Pages/Login";
import Register from "../LayOut/Pages/Register";
import ChefCard from "../LayOut/Pages/Cards/ChefCard";
import RecipeCard from "../LayOut/Pages/Cards/RecipeCard";
import ChefProfile from "../LayOut/Pages/Cards/ChefProfile";
import PrivateRoute from "./PrivateRoute";
import About from "../LayOut/Pages/About";
import FoodQuality from "../LayOut/Pages/FoodQuality";

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
          path: "/about",
         element: <About></About>,
        },
        {
          path: "/foodQuality",
         element: <FoodQuality></FoodQuality>,
        },
        {
          path: "/foodquality",
         element:<FoodQuality></FoodQuality>,
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
         element: <PrivateRoute><ChefProfile></ChefProfile></PrivateRoute>,
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