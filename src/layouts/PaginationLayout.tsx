import PaginationComponent from "../component/pagination-component/PaginationComponent.tsx";
import {Outlet} from "react-router-dom";


export const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>

            <PaginationComponent/>
        </div>
    );
};

export default PaginationLayout;