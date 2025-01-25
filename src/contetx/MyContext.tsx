// створюємо об'єкт який буде характеризувати цей .
// .

import {createContext} from "react";

type MyContextType = {
 counterValue: number;
 increment: (obj:number) => void;//функция
};

export const init= {
       counterValue: 0,
       increment: (obj: number) => {
            console.log(obj);
       }
};
 // викликали функцію createContext, котра створює нам сховище для наших об'єктів.Сказали який тип даних буде в середині <MyContextType>
// буде лежати і зробили йьому дефолтне значення (init)
 export const MyContext = createContext<MyContextType>(init);

