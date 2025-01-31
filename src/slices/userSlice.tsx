
import {IUser} from "../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.service.ts";

//початковий стан
type UserSliceType={
    users:IUser[]
}
const initUserSliceState:UserSliceType =  {users:[]};
// синхроні операції-через синхроні пере творення
 const loadUsers = createAsyncThunk('loadUsers',async (_, thunkAPI) => {
     const users = await getAll<IUser[]>('/users');
     console.log(users);
     return thunkAPI.fulfillWithValue(users);

 });

// розбираємо фіксимо
export const userSlice = createSlice({
    name:'userSlice',//назва
    initialState: initUserSliceState,//початковий стан
    reducers:{},//дії які будуть відбуватися,асинхроні операції пишемо
    extraReducers:builder => builder.addCase(loadUsers.fulfilled,
        (state, action:PayloadAction<IUser[]>)=>{
         state.users=action.payload
    })                                                               //Обробка наших асинхроних операцій
});
// упаковуємо
export const userActions = {...userSlice.actions,loadUsers};