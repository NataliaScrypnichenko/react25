import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import './index.css'
import {Provider} from "react-redux";
import {router} from "./routers/router.tsx";
import {store} from "./redux/sorte.ts";




createRoot(document.getElementById("root")!).render (
   //  тобто ця функція позволяє між всіма ділити сховище store={} повино будити посилання на сховище
   <Provider store={store}>

       <RouterProvider router={router} />

   </Provider>
);