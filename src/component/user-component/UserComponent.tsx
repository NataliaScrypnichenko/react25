import {IUser} from "../../models/IUser.ts";


interface UsersComponentProps {
    user:IUser;
}

export const UserComponent= ({user}:UsersComponentProps)=>{
    return (<div>
        {user.id}  {user.username}
    </div>)
}