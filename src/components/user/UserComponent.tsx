import {FC} from "react";
import {IUser} from "../../model/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserTypeProps={
    item:IUser,
}

const UserComponent:FC<UserTypeProps> = ({item}) => {

     const navigate = useNavigate();
     const handleOnClick = ()=>{
            navigate('details', {state:item});
     };

    return (
        <div >
           <Link to={'details'} state={item}> {item.username}</Link>
        {/* якщо не захочу лінк ио можна створити кнопку і програмно викликати   */}

            <button onClick={handleOnClick} >go to details</button>

        </div>
    );
};

export default UserComponent;

////як ми можемо замінити інформацію SingelUserDetailsPage на  другу є 2 варіанти.Тобто як перекинути дані між двома сторінками/
//1/ state={{}} передати сюди інфармацію яка буде х-ти .state={{}} перші душки це не визначення обєкта а це дежек.ікс=синтаксис,
// випадку якщо захочемо визначити об'єкт, то прописуємо  {data:item}.як ми можемо дістати state={item} використовувати лінк.
// 2 варіант використати кнопку батон