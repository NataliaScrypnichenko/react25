import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";


const UsersComponent = () => {
    console.log("users");
    const [users, setUsers] = useState([]);
    // коли ми це робимо то із аналогією то це виконується 2 рази, але щоб цього не було то
    // const arr:number[]=[11,22,33];
    // то включаємо ф-цію useMemo
    const arr:number[]=useMemo(() => {
        return [11,22,33]
    },[]);



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
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;