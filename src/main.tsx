import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import './index.css'
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "./models/IUser.ts";
import {router} from "./routers/router.tsx";
// типізація
type UserSliceType = {
    users:IUser[];
}
// сив.обєкт почаиковий
const initialState: UserSliceType={users:[]}
// формуємо usersSlice і тут фщрмуємо шматок сховища
// Так можна його знайти  name:"usersSlice", а тут reducers:{} будуть в середині ф-ції які впливають на наш станю
const usersSlice= createSlice({
    name:"usersSlice",
    // початковий стан і типізувати їх і потім вносю обєкт
    initialState:initialState,
    //впливаємо на початковий стан і ззмінюємо його
    //ф-я буде завантажувати обєкт і відправляти в середину і схопити асинхрон?action=точка відхоплення корисного навантаження,
    //state =об'єкт
    reducers:{
      LoadUsers: (state:UserSliceType,action:PayloadAction<IUser[]>) => {
                 state.users=action.payload}
    }

})


// ств.сховище sі в середину передаю з чого буде складатись сховище(юзери пости(кімнати) називаються слайсами і вони роблять сховище
const store= configureStore({
    reducer: {
            userSlice:usersSlice.reducer
            // postsSlice:null
    }
});
//створюємо свій хук буде лекще його використовувати вUsersPage(useAppSelector вона візьме з нашого стору стан його із кожного сегмента який х-зує їх витяне типи даних)
 export const useAppSelector = useSelector. withTypes<ReturnType <typeof store.getState> >();

createRoot(document.getElementById("root")!).render (
   //  тобто ця функція позволяє між всіма ділити сховище store={} повино будити посилання на сховище
   <Provider store={store}>

       <RouterProvider router={router} />

   </Provider>
);