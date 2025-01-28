import {createBrowserRouter} from "react-router-dom";
import MyLayout from "../layouts/MyLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";


class RouteObject{
}

const routes: RouteObject[]=[
    {
        path:'', element: <MyLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
];

export const router=createBrowserRouter(routes)