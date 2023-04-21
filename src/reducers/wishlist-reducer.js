import {createSlice} from "@reduxjs/toolkit";
import {getWishlistThunk, removeFromWishlistThunk} from "../thunks/wishlist-thunks";

const initialState = {
    loadingBooks : true,
    books : []
}

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{},
    extraReducers:{
        [getWishlistThunk.fulfilled] : (state,action) => {
            state.loadingBooks = false
            state.books = action.payload
        },
        [getWishlistThunk.pending] : (state) => {
            state.loadingBooks = true
            state.books = []
        },
        [removeFromWishlistThunk.fulfilled] : (state, action) => {
            state.loadingBooks = false
            state.books = state.books.filter(b => b._id !== action.payload)
        }

    }
})

export default wishlistSlice.reducer;