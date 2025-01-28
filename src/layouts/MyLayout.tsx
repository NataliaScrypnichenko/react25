import Menu from "../component/Menu.tsx";
import {Outlet} from "react-router-dom";


const MyLayout = () => {
    return (
        <div>
             <Menu/>
            <Outlet/>
        </div>
    );
};

export default MyLayout;