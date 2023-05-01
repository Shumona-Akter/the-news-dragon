import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayouts from "../layouts/NewsLayouts";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Catagory></Catagory>,
          loader: ()=> fetch(`http://localhost:5000/news`)
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element: <Register></Register>
        },
        {
          path:"catagory/:id",
          element: <Catagory></Catagory>,
          loader: ({params})=> fetch(`http://localhost:5000/catagory/${params.id}`)
        }
      ]
    },
    {
      path:'news',
      element: <NewsLayouts></NewsLayouts>,
      children:[
        {
          path:":id",
          element:<News></News>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);
  export default router