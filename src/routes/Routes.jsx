
import {
  createBrowserRouter,
  

} from "react-router-dom";

import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FullNews from "../pages/FullNews/FullNews";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('/news.json'),
           
        },
        {
            path:'/fullnews/:id',
            element:<PrivateRoute><FullNews></FullNews></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }
  ]);

export default router;