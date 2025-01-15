import {FC, useEffect, useState} from 'react';
import {IPost} from "../../model/IPost.ts";
import {postService} from "../../services/api.service.ts";


type PostsTypeProps={
    userId:string,
};


const PostsComponent:FC<PostsTypeProps> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(()=>{
        //щоб не було помилок то потрібно зробити перевірку
        if(userId){
            console.log(userId, 'exists')
            postService.getAllPostsOfUserById(+userId)
                .then(value => {
                    console.log(value)
                    setPosts(value)
                });
        }

    }, [userId]);
    return (
        <div >
            {
                posts.map(value => <div key={value.id} ><p className={'m-5'}>{value.title}</p></div>)
            }
        </div>
    );
};

export default PostsComponent;

// те що написано в return потрібно створити компонент. папку