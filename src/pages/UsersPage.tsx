import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


const UsersPage = () => {
    // відхопити інформацію із Стору,state-посилання на сховище
    const  {users} = useAppSelector(({userSlice}) => userSlice);

    // як наповнити юзерів  useDispatch()-викликає функції для того щоб вони виконалтся
    const dispatch = useDispatch();
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(value =>value.json())
            .then(value=>{
                  dispatch(userSliceActions.loadUsers(value));
                // dispatch( userSlice.actions.loadUsers(value));
        })
    },[]);

    return (
        <div>
            {
                users.map((user) => {
                        return <div key={user.id}>{user.name}{}</div>

                })
            }
            <br/>
        </div>
    );
};

export default UsersPage;