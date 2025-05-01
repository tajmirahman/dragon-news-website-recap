import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayOut from "../components/MainLayOut";
import Home from "../components/Home";
import News from "../pages/News";
import CategoryNews from "../pages/CategoryNews";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut />,
        children:[
            {
                path:'/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element: <CategoryNews />,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
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