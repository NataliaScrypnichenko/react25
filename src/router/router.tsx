import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CreateCarPage from "../pages/CreateCarPage.tsx";


// створюємо маршрутизацію
export const router=createBrowserRouter([
    {
        path:'/',element:<App/>,children:[
            {path:'cars',element:<CarsPage/>},
            {path:'cars/create',element:<CreateCarPage/>}
        ]
    }
]);
