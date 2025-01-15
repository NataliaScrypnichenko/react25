import {IUser} from "../model/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../model/IPost.ts";

export const UserService= {
    getUsers:async ():Promise<IUser[]>=> {
       return  await fetch(urls.users.allUsers)
            .then(value => value.json())
    },
    getUser: async (id:number) => {
      return  await fetch(urls.users.buId(id))
            .then(value => value.json());
    },
};

export const postService= {
    getAllPostsOfUserById:async (id:number):Promise<IPost[]>=>{
       return await fetch(urls.posts.userPostsById(id))
               .then(value => value.json())
    }

}
