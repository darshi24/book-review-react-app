import {createSlice} from "@reduxjs/toolkit";
import {updateUserThunk, deleteUserThunk, loginThunk, logoutThunk, registerThunk, profileThunk} from "../thunks/user-thunks";
const initialState = {
    loading : true,
    error : null,
    currentUser : null
}

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers: {
        [updateUserThunk.fulfilled] : (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        [deleteUserThunk.fulfilled] : (state, action) => {
            state.loading = false;
            state.currentUser = null;
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            console.log("In login thunk fulfilled");
            console.log(state.currentUser);
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
    }
})

export default usersSlice.reducer;