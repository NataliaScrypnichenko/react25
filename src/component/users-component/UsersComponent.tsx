// зчитуємо інформацію
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../models/IUser.ts";
import {getAllUsers} from "../../services/api.service.tsx";
import {UserComponent} from "../user/UserComponent.tsx";


export const UsersComponent = () => {
//організовуємо код у правильному руслі
    const [users, setUsers] = useState<IUser[]>([])
     const [query] = useSearchParams();
    useEffect(()=>{
      getAllUsers(query.get('pg') || '1')
          .then(value =>setUsers(value.data))
    },[query]);

    return (
        <div>
            {
                users.map(value=>
                    (<UserComponent
                        key={value.id}
                        item={value}/>)
                )
            }
        </div>
    );
};
