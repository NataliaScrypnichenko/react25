import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import SingleUserDetailsPage from "../pages/SingleUserDetailsPage.tsx";

 //  для того, щоб переходити на іншу сторінку від елемента то прописуємо шлях
 export const routes = createBrowserRouter([
    {
        path: '', element:<Layout/>,children:[
            {index: true, element:<HomePage/>},
            {path:'users',element:<UserPage/>},
            {path:'users/details',element:<SingleUserDetailsPage/>},
            {path:'posts', element:<PostsPage/>}
        ]
    },
])