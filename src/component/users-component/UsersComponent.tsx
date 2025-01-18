import { useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUsersResponseModel} from "../../models/IUsersResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.servise.ts";




export const UsersComponent=()=> {

    const [users,setUsers]=useState<IUser[]>([]);

    useEffect(()=>{
       getUsers()
            .then(({users}: IUsersResponseModel)=>{
                setUsers(users);
            })
    },[]);

    return (
        <div>
            {
                users.map((user:IUser)=><UserComponent key={user.id} user={user}/>)
            }

        </div>
    )
}
//щоб створити  onClick потрібно Alt+Enter =>Generate handler =>nClick