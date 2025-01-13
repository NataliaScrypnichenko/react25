import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import {FC} from "react";


type Props = {
    user: IUser;
}


export const UserComponent:FC<Props> = ({user})=> {
// щоб перейти на сторінку іншу to navigation
    const navigation= useNavigate()

    const onButtonClickNavigate = () => {
         navigation('/users/' + user.id+ "/carts")
    }

    return <div className={'m-5 border-2'}>
        <h2>{user.username} </h2>
        <p>{user.email}</p>

        <button className={'border-4'} onClick={onButtonClickNavigate}>Click me</button>
    </div>


}
