// @ts-ignore
// @ts-ignore

import {useEffect} from "react";
import {useAppSelector} from "../hooks/useFppSelector.tsx";
import {useAppDispatch} from "../hooks/UseAppDispatch.ts";
import {userSliceActions} from "../slices/userSlice/UserSlice.ts";



const UsersPage = () => {
    // відхопити інформацію із Стору,state-посилання на сховище
    const {users} = useAppSelector(({userSlice}) => userSlice);console.log(users)

    // як наповнити юзерів  useDispatch()-викликає функції для того щоб вони виконалтся
    const dispatch = useAppDispatch();

    useEffect(() => {
          dispatch(userSliceActions.loadUsers())
        })
    },[] )

    return (<div>{users.map((user) => {return (<div key={user.id}>{user.name}</div>)})}</div>
    );
};

export default UsersPage;
