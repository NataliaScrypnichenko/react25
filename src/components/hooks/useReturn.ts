import {useEffect, useState} from "react";


export  const useReturn =<T,> (url:string) => {
    // (url:string,defaultValue:T)=defaultValue-являє тойсамий тип який ми застосовуємо,тобто масив юзеріто потрібно передати  в App пустий [].другим аргументом
    // якщо так не робити то буде помилка в АРР і потрібно провірити users &&
    const [obj, setObj] =useState<T>();

   useEffect(() => {

       fetch(url)
           .then(value => value.json())
           .then(value => {
               setObj(value)
           });
   }, [])
    return obj;

}
export default useReturn;

