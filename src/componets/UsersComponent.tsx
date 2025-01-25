import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";


const UsersComponent = () => {
    console.log("users");
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
       fetch("http://jsonplaceholder.typicode.com/users")
        .then(value => value.json())
           .then(value => {
               setUsers(value)
           });
       // то не будемо бачити яким чином вона від працьовувати(вона повина спрацювати при натисканні якоїсь кнопки
       return () => {
           console.log('unsubscribe');
       }


    },[]);


    return (
        <div>
             Users Component
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;