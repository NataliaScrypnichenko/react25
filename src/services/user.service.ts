import  axios from "axios";
import {IUser} from "../models/IUser.ts";


//ми можемо створювати багато axiosInstance змінювати в них урлу і ми тут вказуємо один раз адрес урли і більше не потрібно ніде писати
// якщо внас змінюється урла чи домени ми міняємо в одному місті
const axiosInstance = axios.create({
    // базова урла на яку робляться всі запити
    baseURL: "http://jsonplaceholder.typicode.com/",
    //зазвичай в ньому існують загальні хедери які відправляються, під час нашого запиту
    headers:{'Content-Type':'application/json'},

});

// //аналог фетчогового запиту на отримання всіх користовачів
// axiosInstance.get<IUser[]>('/users')

export const getAllUsers = async ():Promise<IUser[]> => {
    //так отримаємо response потім ми повертаємо праметр
    const {data } = await axiosInstance.get<IUser[]>("/users");
    return data ;
}

//далі ми можемо його ітерувати і сетити якийсь об'єкти
// інтерсептори це пере хопник -перехоплюють реквести і респонси (18 рядок це реквест до сервіса і нам приходить респонс від сервіса)
//зразу робити return request; це і є запит
axiosInstance.interceptors.request.use((request)=>{
     console.log(request);
    // додавємо хедери і дозволяє нам вклинюватися,тобто буде додавати їх в кожну getAllUsers
    request.headers.set('xxx','xxxx');
    console.log(request.method);
    return request;
})

// axiosInstance.interceptors.response.use((response )=>{
// console.log(response);
//     return response
// })

// export const getAllUsers2 = async ():Promise<IUser[]> => {
//     //так отримаємо response потім ми повертаємо праметр
//     const {data } = await axiosInstance.get<IUser[]>("/users");
//     return data ;
// }
//
// export const getAllUsers3 = async ():Promise<IUser[]> => {
//     //так отримаємо response потім ми повертаємо праметр
//     const {data } = await axiosInstance.get<IUser[]>("/users");
//     return data ;
// }


//ми можемо зберігати данні

 export const saveUser= async (user:IUser):Promise<IUser>=> {
    const {data} = await axiosInstance.post<IUser>("/users",user);

    return data;
}
