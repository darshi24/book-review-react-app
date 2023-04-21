import {createSlice} from "@reduxjs/toolkit";
import {getAllReviewsThunk,
    getReviewsForBookISBNThunk,
    getReviewsForAuthorThunk,
    createReviewThunk,
    deleteReviewThunk
} from "../thunks/reviews-thunk";

const initialState = {
    loadingReviews : true,
    reviews : []
}

const reviewSlice = createSlice({
    name:"reviews",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllReviewsThunk.fulfilled] :(state,{payload}) => {
            state.loadingReviews = false;
            state.reviews = payload
        },
        [getReviewsForAuthorThunk.fulfilled] :(state,{payload}) => {
            state.loadingReviews = false;
            state.reviews = payload
        },
        [getReviewsForBookISBNThunk.fulfilled] :(state,{payload}) => {
            state.loadingReviews = false;
            state.reviews = payload;
        },
        [getAllReviewsThunk.pending] : (state) => {
            state.reviews = []
            state.loadingReviews = true
        },
        [getReviewsForAuthorThunk.pending] : (state) => {
            state.reviews = []
            state.loadingReviews = true
        },
        [getReviewsForBookISBNThunk.pending] : (state) => {
            state.reviews = []
            state.loadingReviews = true
        },
        [createReviewThunk.fulfilled] : (state, {payload}) => {
            state.loadingReviews = false
            state.reviews.push(payload)
        },
        [deleteReviewThunk.fulfilled] : (state, {payload}) => {
            state.loadingReviews = false
            state.reviews = state.reviews.filter(r => r._id !== payload)
        }
    }
})

export default reviewSlice.reducer;