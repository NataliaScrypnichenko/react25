//щоб не використовувати посилання на сайт с юзерами а він у двох випадках однаковий будемо створювати файл
// в самом проєкиті env files це для того якщо ми захочемо ще використати ще в деяких місцях

import {IUser} from "../IUser.ts";
// const baseUrl = import.meta.env.VITE_API_URL ;

const getUsers=async ():Promise<IUser[]>=>{
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
}
const getUser=async (id:string):Promise<IUser>=>{
    return await fetch(import.meta.env.VITE_API_URL + '/'+id)
        .then(value => value.json());
}
export {
    getUsers,
    getUser
}
