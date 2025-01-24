
//якщо багато сервісів то їх ми розкидуємо по папках

import  axios from "axios";
import {IUsersWithTokens} from "../models/IUsersWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData={
    username: string,
    password: string,
    expiresInMins:number
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers:{}
});

// будемо перехоплювати всі запити які являються гітові get
 axiosInstance.interceptors.request.use((requestObject)  => {
    if (requestObject.method?.toUpperCase() === "GET") {

       requestObject.headers.Authorization = "Bearer " + retriveLocalStorage<IUsersWithTokens>('user').accessToken;
    //    майбутнтому якщо потрібно щос викликати то викликаємо
    //     retriveLocalStorage<IProductsResponseModelType[]>('product')
    }
    return requestObject;
 })

 // interceptors не буде діяти на login а буде діяти на loadAuthProducts
 export const login=async ({username,password,expiresInMins}:LoginData):Promise<IUsersWithTokens>=>{
     // робимо запит,він поверне відповідь в середені будуть user із токінами
     const {data:userWithTokens}=  await axiosInstance.post<IUsersWithTokens>('/login',{username,password,expiresInMins})
     console.log(userWithTokens);
     //зберегти в локальному сховищу в браузері,localStorage,сешенсторіз,куки зі сторони сервирато(кукі)
     localStorage.setItem('user', JSON.stringify(userWithTokens));
     return userWithTokens;
 };

 export const loadAuthProducts=async ():Promise<IProduct[]> => {
   const {data:{products}} = await axiosInstance.get<IProductsResponseModelType>('/products', {});
   console.log(products);
   return products;

 }

//фунція для рефреш токін 
export const refresh =async () => {
      // дістали iUsersWithTokens
      const iUsersWithTokens = retriveLocalStorage<IUsersWithTokens>('user');
      // отримали для нього нові  accessToken і refreshToken
      const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',
         {refreshToken:iUsersWithTokens.refreshToken,
         expiresInMin:1});

       console.log(accessToken);
       console.log(refreshToken);
       // а тут замінили його
       iUsersWithTokens.accessToken = accessToken;
       iUsersWithTokens.refreshToken = refreshToken;
       //назад в localStorage його положили щоб він там оновився,після ідемо на стр.AuthResourcesPage
       localStorage.setItem('user', JSON.stringify(iUsersWithTokens));
  
}