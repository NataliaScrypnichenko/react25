import {Outlet} from "react-router";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";

 const MainLayout= ()=> {
    return <>
         <MenuComponent/>
        <Outlet/>
        <hr/>
    </>;
}
export default MainLayout;