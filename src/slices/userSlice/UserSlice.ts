
import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users:IUser[];
//   lдодаємо
    user:IUser | null;
    // х-є стан завантаження і отримання даних із арі
    loadState: boolean;
}

const initialState: UserSliceType={users:[],user:null,loadState:false};

const loadUsers=createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI)=> {
        try {
            const users = await fetch("http://jsonplaceholder.typicode.com/users")
                .then(value => value.json());
             // викликаємо  changeLoadState-щоб робилося в одному місці
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true))

             return thunkAPI.fulfillWithValue(users);
            }catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('some error');
            }
    }
    );
// доставати юзер 1
const loadUser=createAsyncThunk('userSlice/loadUser',
    //якщо передавати декілька то потрібно передавати об'єктом
    async (id:string, thunkAPI)=> {
        try {
            const user = await fetch("http://jsonplaceholder.typicode.com/users/"+id)
                .then(value => value.json());
            // викликаємо  changeLoadState
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true))

            return thunkAPI.fulfillWithValue(user);
            }catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('some error');
            }
    }
    );

// export const userSlice= createSlice({
//     name:"userSlice",
//
//     initialState:initialState,
//     reducers:{},
//
//     extraReducers:builder => builder.addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>)=>{
//         state.users=action.payload
//     })
//         .addCase(loadUsers.rejected,(state,action)=>{
//             console.log(state);
//             console.log(action);
//                    })
//
// });
//залишилось додати.addCase(loadUser.fulfilled)
export const userSlice= createSlice({
    name:"userSlice",
    initialState:initialState,
    //що пишем сюди- якщо маємо потенційні характеристики і будуть змінюватися не на основі асенхрогого діях,
    // прописуємо примітивні дії тобто/ changeLoadState-можемо викликати де завгодно
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>)=>{
                  state.loadState = action.payload;
        }
    },

    extraReducers:builder => builder.addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>)=>{
        state.users=action.payload
    })
        .addCase(loadUsers.rejected,(state,action)=>{
            console.log(state);
            console.log(action);
        })
        .addCase(loadUser.fulfilled, (state,action:PayloadAction<IUser>)=>{
           state.user= action.payload;
        })
        // // викликаємо  changeLoadState-щоб робилося в одному місці
        //             // thunkAPI.dispatch(userSliceActions.changeLoadState(true))
        // isFulfilled-слідкує за іншими фун.чи наповнилися вони іншими
        .addMatcher(isFulfilled(loadUser,loadUsers),(state)=>{
            state.loadState=true;
        })
//     Впливає погано то
        .addMatcher(isRejected(loadUser,loadUsers), (state)=>{
           console.log(state);
        })

});
// створюємо UserPage
export const userSliceActions={...userSlice.actions,loadUsers,loadUser};
