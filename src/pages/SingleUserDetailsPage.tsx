// import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";
import {IUser} from "../model/IUser.ts";

const SingleUserDetailsPage =()=>{

   const {state} =useLocation();
 const user= state as IUser;

    return(
        <div>
            {user.email}
        </div>
    )
}
export default SingleUserDetailsPage;
// тут не повино відображатися інформація {user.email} тільки в компонентак дз3.1 а зараз це робиться для спрощення