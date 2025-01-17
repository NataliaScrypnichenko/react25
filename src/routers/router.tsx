import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

export const router = createBrowserRouter([{
    path: "/",element:<App/>,children:[
        {path:'users',element:<UsersPage/>}
    ]
}])
