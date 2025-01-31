import {IComment} from "../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.service.ts";


type CommentSliceType={
    comments:IComment[]
}
const initCommentSliceState:CommentSliceType = {comments:[]};

const loadComment = createAsyncThunk('loadComments',async (_, thunkAPI) => {
    const comments = await getAll<IComment[]>('/comments');
    return thunkAPI.fulfillWithValue(comments);

});

export const commentSlice= createSlice({
    name:'commentSlice',
    initialState: initCommentSliceState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(loadComment.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        }),
});
 export const commentActions={...commentSlice.actions,loadComment};