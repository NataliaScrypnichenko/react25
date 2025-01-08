// в цьому файлі відображається дані які ми хочемо побачити
// щоб не ругалося на item типізуємо йщго :FC<UserPropType>
import  {FC} from 'react';
import {IUser} from "../../models/IUser.ts";
type UserPropType = {
    item:IUser
}

const UserComponent:FC<UserPropType> = ({item}) => {

    return (
            <div >{item.name}</div>
    );
};

export default UserComponent;