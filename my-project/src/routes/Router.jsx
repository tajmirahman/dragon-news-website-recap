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
                path:'/category/:id',
                element: <h2>This category news</h2>
            }
        ]
    },
    {
        path:'/news',
        element:<News></News>
    },
    {
        path:'/auth',
        element: <h1>auth layout</h1>
    },
    {
        path:'*',
        element: <h1>error</h1>
    }
])

export default routes;