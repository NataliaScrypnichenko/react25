// типізація
import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users:IUser[];
}
// сив.обєкт почаиковий
const initialState: UserSliceType={users:[]}

// стиворюємо loadUsers?вказує конкретневиконнання нашого проміса
const loadUsers=createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI)=> {
        try {
            const users = await fetch("http://jsonplaceholder.typicode.com/users")
                .then(value => value.json());
             return thunkAPI.fulfillWithValue(users);
            // примусово виклик помилки
            // throw new Error();
        }catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('some error');
        }
    }
    );

// формуємо usersSlice і тут фщрмуємо шматок сховища
// Так можна його знайти  name:"usersSlice", а тут reducers:{} будуть в середині ф-ції які впливають на наш станю
export const userSlice= createSlice({
    name:"userSlice",
    // початковий стан і типізувати їх і потім вносю обєкт
    initialState:initialState,
    reducers:{},
    // зареєструвати його
    extraReducers:builder => builder.addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>)=>{
        state.users=action.payload
    })
        .addCase(loadUsers.rejected,(state,action)=>{
            console.log(state);
            console.log(action);
                   })

});

// цуе замість в UsersPage (/ dispatch( userSlice.actions.loadUsers(value));)
export const userSliceActions={...userSlice.actions,loadUsers}
