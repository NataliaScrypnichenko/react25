import {useEffect, useState} from "react";
// вирізали і вставили хук сюди,тобто створений хук викликає два інших

export const useFetch = () => {

     const [users, setUsers] = useState([]);
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
 return users;
 }