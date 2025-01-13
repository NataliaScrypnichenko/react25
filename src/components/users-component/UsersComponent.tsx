import { useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUsersResponseModel} from "../../models/IUsersResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {userService} from "../../service/api.service.ts";




export const UsersComponent=()=> {

    const [users,setUsers]=useState<IUser[]>([]);

    useEffect(()=>{
            userService.getAllUsers()
            .then(({users}: IUsersResponseModel)=>{
                 setUsers(users);
        })
    },[])



//можно створити компонент.відео в уроці 3.1
    return (
        <div>
            {
               users.map((user:IUser)=><UserComponent key={user.id} user={user}/>)
            }

        </div>
    )
}
//щоб створити  onClick потрібно Alt+Enter =>Generate handler =>nClick