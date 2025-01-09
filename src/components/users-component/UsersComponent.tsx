import  {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {
    const [users,setUsers]=useState <IUser[]>([]);
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(value => value.json())
        //     .then(response => {
        //         setUsers(response);// запускає перебудову компонента
        //     });
        return () => {
            console.log('done');
        }
    }, []);

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