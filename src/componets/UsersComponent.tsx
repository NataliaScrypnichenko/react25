import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


const UsersComponent = () => {
    console.log("users");
    const [users, setUsers] = useState([]);

    // визиваємо useCallback
    const foo =useCallback(()=>{
        console.log("test");
    },[])


    useEffect(()=>{
       fetch("http://jsonplaceholder.typicode.com/users")
        .then(value => value.json())
           .then(value => {
               setUsers(value)
           });
       return () => {
           console.log('unsubscribe');
       }


    },[]);


    return (
        <div>
             Users Component
            {/*сюди тепер повина зайти функція /*/}
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;