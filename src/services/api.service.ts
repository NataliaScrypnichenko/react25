import {IUser} from "../model/IUser.ts";
import {urls} from "../constants/urls.ts";

export const UserService= {
    getUsers:async ():Promise<IUser[]>=> {
       return  await fetch(urls.users.allUsers)
            .then(value => value.json())
    },
    getUser: async (id:number) => {
      return  await fetch(urls.users.buId(id))
            .then(value => value.json());
    }
}