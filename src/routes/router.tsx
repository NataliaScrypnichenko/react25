import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartPage} from "../pages/CartsPage.tsx";

 export const routes = createBrowserRouter([{
    path: "/",element:<MainLayout/>,children:[
        {path:'users',element:<UsersPage/>, children:[
                // / урла <UsersPage заміниться на CartsPage
                {path:':id/carts', element:<CartPage/>}
            ]},
    ]
}])