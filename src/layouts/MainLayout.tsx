
import {Outlet} from "react-router-dom";

 export const MainLayout = () => {
    return (
        <div>
            main
            <Outlet/>
        </div>
    );
};

export default MainLayout;

