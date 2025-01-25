import UserComponent from "./UserComponent.tsx";
import {useCallback,  useMemo, } from "react";
import {useFetch} from "./hooks/useFetch.tsx";


const UsersComponent = () => {
    console.log("users");
    // тепер є хук новий який викликає двох інших-капсолює  і повертає користувачів
    const users = useFetch();
    // const [users] = useFetch()- можна так але потрібно переробити дів
    const arr:number[]=useMemo(() => {
        return [11,22,33]
    },[]);

    const foo =useCallback(()=>{
        console.log("test");
    },[]);

    return (
        <div>
             Users Component
            {
                users.map(value=><UserComponent item={value} foo={foo} arr={arr}/>)
            }
        </div>
    );
};

export default UsersComponent;