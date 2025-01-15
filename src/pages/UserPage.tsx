import UsersComponent from "../components/users/UsersComponent.tsx";
import {Outlet} from "react-router-dom";


const UserPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UserPage;