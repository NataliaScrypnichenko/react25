import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {
    //робимо процес щоб отримати продукти із аутиф.точку на якій нам дадуть цей продукт(можна робити окремий компонент)
    useEffect(()=>{
     loadAuthProducts().then(products =>{
         console.log(products);
         //якщо стається то виводимо
     }).catch(reason => console.log(reason));
        refresh()
            .then(() => loadAuthProducts())
            .then(value => console.log(value))
    },[])


    return (
        <div>
            resources
        </div>
    );
};

export default AuthResourcesPage;