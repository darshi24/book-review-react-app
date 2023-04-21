import {createAsyncThunk} from "@reduxjs/toolkit";
import * as reviewService from "../services/reviews-service";

export const getAllReviewsThunk =createAsyncThunk(
    'reviews/getAll', async() => {
        const response = await reviewService.getAllReviews()
        return response;
    }
)

export const createReviewThunk = createAsyncThunk(
    'reviews/create', async(review) => {
        const newReview = await reviewService.createReview(review);
        return newReview;
    }
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/delete', async(rid) => {
        await reviewService.deleteReview(rid);
        return rid;
    }
)

export const getReviewsForBookISBNThunk = createAsyncThunk(
    'reviews/getForBookISBN', async(isbn) => {
        const response = await reviewService.getReviewsForBookISBN(isbn);
        return response;

    }
)

export const getReviewsForAuthorThunk = createAsyncThunk(
    'reviews.getForAuthor', async(id) => {
        const response = await reviewService.getReviewsForAuthor(id);
        return response;
    }
)
