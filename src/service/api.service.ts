import {IUsersResponseModel} from "../models/IUsersResponseModel.ts";
import {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl='https://dummyjson.com'
//зобимо об'єкти і підоб'єкти

 export const userService= {
    getAllUsers:async ():Promise<IUsersResponseModel>=>{
        return  await fetch(baseUrl+'/users')
            .then(value=>value.json())
    }
};
 export const cartService={
     getCartsOfUsers:async (userId:string):Promise<ICartResponseModel>=>{
          return  await fetch(baseUrl+'/carts/user/'+userId)
             .then(res => res.json())
     },
     // asd()=>{}
 };
 // можна залишти що ці дані знаходяться в папкі CartsComponent адо перенести є два варіанти 1 це той що лежить зараз в
// цій папкі.Другий варіант то що зараз знаходиться в цьому файлі.Тещо потрыбно показати з корзини то прописуэмо в cartService

