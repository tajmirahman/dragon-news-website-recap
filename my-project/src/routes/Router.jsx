import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../components/MainLayOut";
import Home from "../components/Home";
import News from "../pages/News";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/news',
                element:<News></News>
            }
        ]
    }
])

export default routes;