import React from "react"
import Posts from "../../pages/Posts";
import { Navigate } from "react-router";// Navigate перенаправляет с дефолтного "/" на любой другой
import { About } from "../../pages/About";
import { MyError } from "../../pages/Error";
import { Login } from "../../pages/Login";
import { PostIdPage } from "../../pages/PostIdPage";
import { MyAccount } from "../../pages/MyAccount";


export const privateRoutes = [
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/', element: <Navigate to="/posts" />},
    {path: '/about', element: <About />},
    {path: '*', element: <MyError />},
    {path: '/account', element: <MyAccount/>}
]
export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/', element: <Navigate to="/login" />},
    {path: '/posts', element: <Posts/>},
    {path: '*', element: <MyError />},
]