import { useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUsersResponseModel} from "../../models/IUsersResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.servise.ts";
import {useSearchParams} from "react-router-dom";

export const UsersComponent=()=> {
    // визначили дефолтну пейджу
    const [searchParams] = useSearchParams({page:'1'});

    const [users,setUsers]=useState<IUser[]>([]);

    useEffect(()=>{
        // get дає нам стрінгове значення повертає або нічого,тому потрібно робити перевірку або ставити дефолтне значення
        const currentPage = searchParams.get('page')|| '1';
       // в душках вказуємо сторінку і це буде контролювати пагінаторг?зверху всу прописано
       getUsers(currentPage)
            .then(({users}: IUsersResponseModel)=>{
                setUsers(users);
            })
    },[searchParams]);// повернусь(коли змінюється вурлі сторінка, то він запускає оновлені параметри )

    return (
        <div>
            {
                users.map((user:IUser)=><UserComponent key={user.id} user={user}/>)
            }

        </div>
    )
}
//щоб створити  onClick потрібно Alt+Enter =>Generate handler =>nClick