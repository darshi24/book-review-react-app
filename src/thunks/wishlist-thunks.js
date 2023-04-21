import {createAsyncThunk} from "@reduxjs/toolkit";
import * as wishlistService from "../services/wishlist-service";

export const getWishlistThunk = createAsyncThunk(
    "wishlist/getAll", async(id) => {
        const response = await wishlistService.getWishlist(id);
        return response;
    }
)

export const addToWishListThunk = createAsyncThunk(
    "wishlist/add", async(bookcurrentUserID, book) => {
        const response = await wishlistService.addToWishlist(bookcurrentUserID,book);
        return response;
    }
)

export const removeFromWishlistThunk = createAsyncThunk(
    "wishlist/remove", async({currentUserID, wishlistBookID}) => {
        await wishlistService.removeFromWishlist(currentUserID, wishlistBookID);
        return wishlistBookID;
    }
)