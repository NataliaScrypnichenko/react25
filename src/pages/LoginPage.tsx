import {useEffect} from "react";
import {login} from "../services/api.service.ts";


export const LoginPage = () => {
    //буде логінитися відразу як на неї переходоти
     useEffect(() => {
             //беруться з джейсон
             login({
                 username: "emilys",
                 password: "emilyspass",
                 expiresInMins: 1
             });

         },
         []);

    return (
        <div>
            Login Page
        </div>
    );
};
 export default LoginPage;

