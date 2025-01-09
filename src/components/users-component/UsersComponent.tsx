import  {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../models/services/api.strvic.ts";

const UsersComponent = () => {
    const [users,setUsers]=useState <IUser[]>([]);
    useEffect(()=>{
             const FetchData=async ()=>{
                 const users = await getUsers();
                 setUsers(users);
             }
            FetchData();

        return () => {
            console.log('done');
        }
    }, []);//можна використовувати ф-цію цю аба в файлі арі.

    return (
        <div>
            {
                // users.map(value =><div key={value.id}>{value.name}</div>) так не харак. робимо ітерацію
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;