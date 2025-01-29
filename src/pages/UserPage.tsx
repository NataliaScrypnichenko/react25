import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../hooks/useFppSelector.tsx";
import {useAppDispatch} from "../hooks/UseAppDispatch.ts";
import {userSliceActions} from "../slices/userSlice/UserSlice.ts";



const UserPage = () => {
    // видушуємо id
    const {id} = useParams();
    // використовуємо loadState: boolean;*
    const {user,loadState} = useAppSelector(({userSlice}) =>userSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
      //перевірка
        if(id){
            dispatch(userSliceActions.loadUser(id))
        }

    },[id])
    
    return (
        // / зобимо перевірку юзера
        <div>
            {/*використовуємо loadState: boolean; і провіряємо */}
            {!loadState &&  <div>Loading</div>}

            {user && <div>{user.id} {user.name}</div>}
        </div>
    );
};

export default UserPage;