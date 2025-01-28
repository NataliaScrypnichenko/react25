// ств.сховище sі в середину передаю з чого буде складатись сховище(юзери пости(кімнати) називаються слайсами і вони роблять сховище
import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice/UserSlice.ts";

export const store= configureStore({
    reducer: {
        userSlice:userSlice.reducer
        // postsSlice:null
    }
});