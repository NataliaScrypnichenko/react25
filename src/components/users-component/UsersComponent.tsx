import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUsersResponseModel} from "../../models/IUsersResponseModel.ts";



export const UsersComponent=()=> {


    const [users,setUsers]=useState<IUser[]>([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(value=>value.json())
            .then(({users}: IUsersResponseModel)=>{
                 setUsers(users);
        })
    },[])

    return (
        <div>
            {
               users.map((user:IUser)=><div className={'m-5 border-4'}>
                   {user.username}{user.email}
               </div>)
            }

        </div>
    )
}