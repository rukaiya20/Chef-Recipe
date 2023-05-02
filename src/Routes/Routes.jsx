import { createBrowserRouter } from "react-router-dom";
import Header from "../LayOut/Pages/Header";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,
    },
  ]);

  export default router;