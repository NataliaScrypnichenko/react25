 const baseUrl = "https://jsonplaceholder.typicode.com";

export const urls ={
    users: {
        allUsers: baseUrl + '/users',
        buId: (id: number)=> {
            return baseUrl + '/' + id;

        }
    },
    posts:{
        allPosts: baseUrl + '/posts',
        buId: (id: number)=>baseUrl + '/' + id,
        userPostsById:(id:number)=>{
            return baseUrl + '/posts?userId=' + id;
        }

    }
}
//  сюди будуть + інші урли
