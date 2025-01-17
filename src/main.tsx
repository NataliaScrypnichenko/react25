import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";


//визначаємо маршрути прописуємо їх в router папкі
// const routes= createBrowserRouter([{
//     path:'/',element:<App/>
// }]);

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes} />)
