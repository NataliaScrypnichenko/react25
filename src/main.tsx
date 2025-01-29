import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import ComplexPage from "./pages/ComplexPage.tsx";

const routers = createBrowserRouter([
    {
        path: "/",element:<App/>,children:[
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>},
            {path:'comments',element:<CommentsPage/>},
            {path:'complex',element:<ComplexPage/>}
        ]
    }

]);




createRoot(document.getElementById('root')!).
render(<Provider store={store}>
    <RouterProvider router={routers}/>

</Provider>)
