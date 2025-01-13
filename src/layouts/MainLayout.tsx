import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/Menu/MenuComponent.tsx";

export const MainLayout = () => {
    return <div>
        <MenuComponent/>
        <hr/>
        <Outlet/>
        <hr/>
    </div>
};