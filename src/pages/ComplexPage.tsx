import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../slices/userSlice.tsx";
import {postActions} from "../slices/postSlice.tsx";
import {commentActions} from "../slices/commentSlice.tsx";


const ComplexPage = () => {

    const dispatch = useAppDispatch();

    const {commentStoreSlice:{comments},postsStoreSlice:{posts},userStoreSlice:{users}} = useAppSelector(state => state);

    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers())
        }
        if(!posts.length){
            dispatch(postActions.loadPosts())
        }
        if (!comments.length){
            dispatch(commentActions.loadComment())
        }
    })
    
    return (
        <div>

        </div>
    );
};

export default ComplexPage;