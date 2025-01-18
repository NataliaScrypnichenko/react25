import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.servise.ts";
import {IUsersResponse} from "../../models/IUsersResponse.ts";


interface UsersComponentProps {
    user:IUser
}

export const UsersComponent = ({user}: UsersComponentProps) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers().then(({users}: IUsersResponse) => {
            setUsers(users);
        })
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UsersComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;