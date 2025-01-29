import {useEffect} from "react";
import {useAppSelector} from "../hooks/useFppSelector.tsx";
import {useAppDispatch} from "../hooks/UseAppDispatch.ts";
import { userSliceActions} from "../slices/userSlice/UserSlice.ts";


export const UsersPage  =  () =>{

    const {users}= useAppSelector(({userSlice})=> userSlice);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(userSliceActions.loadUsers())
    },[]);

    return (
        <div>
            {
                users.map((user) =>{return (<div key={user.id}>{user.name}</div>)})
            }
        </div>
    )
};
export default UsersPage;


