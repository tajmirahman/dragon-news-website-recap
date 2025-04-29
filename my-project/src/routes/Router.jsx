import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../components/MainLayOut";
import Home from "../components/Home";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default routes;