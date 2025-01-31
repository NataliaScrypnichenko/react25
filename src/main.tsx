import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import { RouterProvider} from "react-router";
import {routers} from "./routers/router.tsx";
import {store} from "./redux/store.ts";





createRoot(document.getElementById('root')!).
render(<Provider store={store}>
    <RouterProvider router={routers}/>

</Provider>)
