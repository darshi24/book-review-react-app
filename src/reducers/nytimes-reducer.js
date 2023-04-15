import {createSlice} from "@reduxjs/toolkit";
import {getListNamesThunk} from "../thunks/nytimes-thunks"

const initialState = {
    loading : true,
    error : null,
    listNames : []
}

const nySlice = createSlice({
    name:"nytimes",
    initialState,
    reducers:{},
    extraReducers: {
        [getListNamesThunk.fulfilled] : (state, action) => {
            state.loading = false;
            console.log("Payload")
            console.log(action.payload.data.results);
            state.listNames = action.payload.data.results;

        }
    }
})

export default nySlice.reducer;