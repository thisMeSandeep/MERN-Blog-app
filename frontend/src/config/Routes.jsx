import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import PostList from "../pages/PostList"
import Register from "../pages/Register"
import SinglePost from "../pages/SinglePost"
import Write from "../pages/Write"
import MainLayout from "../layout/MainLayout"


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/posts",
                element: <PostList />
            },
            {
                path: "/:slug",
                element: <SinglePost />
            },
            {
                path: "/write",
                element: <Write />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])


const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter