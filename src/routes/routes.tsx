import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";

 export const routes = createBrowserRouter([
     {path:'/',element:<MainLayout/>,children:[
             // index:true-означає кореневий шлях
             {index:true,element:<HomePage/>},
             {path:'login',element:<LoginPage/>},
             {path:'/auth/resources',element:<AuthResourcesPage/>}
         ]}
 ]);