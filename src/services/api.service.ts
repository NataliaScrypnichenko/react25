


const baseUrl = "https://jsonplaceholder.typicode.com"


// export const userSlice = {
//     getAllUsers:async ():Promise<IUser[]> => {
//         const users = await fetch(baseUrl+'/users')
//             .then(value => value.json());
//              console.log(users);
//              return users;
//     }
// }
// const postSlice = {}
// const commentSlice = {}
// повертає об'єкти дженерелсервіс иоту що ьут отримання всіх посиів і коментарів lkz dcs[
export const getAll = async<T,> (endpoint:string) => {
   const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response:Response) => response.json());
   return responseResult as T;
};


// // повині поернуьтся об'єкти із промісами в якосиі всіх юзерів
// const all = getAll<IUser[]>('/users');