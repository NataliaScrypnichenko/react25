import  {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../models/services/api.servic.ts";

const UsersComponent = () => {
    const [users,setUsers]=useState <IUser[]>([]);
    const[item,setItem]=useState<IUser | null>(null);
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

    const foo=(item:IUser)=>{
        setItem(item);
    }
    return (
        <div>
            {
                item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
