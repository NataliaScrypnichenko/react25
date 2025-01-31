import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../slices/userSlice.tsx";
import {IUser} from "../models/IUser.ts";



const UsersPage = () => {

    const dispatch = useAppDispatch();


    const users = useAppSelector(state=>state.userStoreSlice.users);
      // console.log(users);

    useEffect(()=>{
        dispatch(userActions.loadUsers);
    },[])

    return (
        <div>
            {
                users.map((user:IUser) => (<div key={user.id}>{user.name}</div>))
            }
        </div>
    );
};

export default UsersPage;