import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice.tsx";
import {postSlice} from "../slices/postSlice.tsx";
import {commentSlice} from "../slices/commentSlice.tsx";
import {useDispatch, useSelector} from "react-redux";





export const store = configureStore({
    reducer: {
        userStoreSlice:userSlice.reducer,
        postStoreSlice:postSlice.reducer,
         commentStoreSlice:commentSlice.reducer,
    }
});
 // типізувати,якщо ми змінюємо стан із стору надати редаксу за допомого їх буде виконувати самостійно
 export  const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

 export const useAppSelector = useSelector.withTypes<ReturnType<typeof  store.dispatch>>();