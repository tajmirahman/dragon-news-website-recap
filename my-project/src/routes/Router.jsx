import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayOut from "../components/MainLayOut";
import Home from "../components/Home";
import News from "../pages/News";
import CategoryNews from "../pages/CategoryNews";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../components/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/details/:id',
        element: <PrivateRoute>
            <NewsDetails />
        </PrivateRoute>,
        loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/news/${params.id}`);
          }
          
    },

    {
        path: '/news',
        element: <News></News>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <SignUp></SignUp>
            }
        ]
    },

    {
        path: '*',
        element: <h1>error</h1>
    }
])

export default routes;