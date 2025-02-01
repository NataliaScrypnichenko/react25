import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../slices/commentSlice.tsx";
import {IComment} from "../models/IComment.ts";



export const CommentsPage = () => {
    const dispatch = useAppDispatch();

    const comment = useAppSelector(state => state.commntStoreSlise.comments);

    useEffect(() => {
        dispatch(commentActions.loadComment())
    },[])

    return (
        <div>
            {
                comment.map((comment:IComment) => (<div key={comment.id}>{comment.text}</div>))
            }
            </div>
    );
};

export default CommentsPage;