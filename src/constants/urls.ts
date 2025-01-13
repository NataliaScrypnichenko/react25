 const baseUrl = "https://jsonplaceholder.typicode.com";

export const urls ={
    users: {
        allUsers: baseUrl + '/users',
        buId: (id: number)=> {
            return baseUrl + '/' + id;

        }
    },
    posts:{}
}
//  сюди будуть + інші урли
