import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../slices/postSlice.tsx";
import {IPost} from "../models/IPost.ts";


export const PostsPage = () => {

 const dispatch = useAppDispatch();
 // @ts-ignore
    const posts = useAppSelector(state =>state.postStoreSlice.posts );


 // const posts = useAppSelector((state=>state.postStoreSlice.posts));

 useEffect(() => {
     dispatch(postActions.loadPosts)
 },[])


    return (
        <div>
            {posts.map((post:IPost) => (<div key={post.id}>{post.title}</div>))}
            </div>
    );
};

export default PostsPage;