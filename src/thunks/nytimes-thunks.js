import * as publicService from "../services/nytimes-service"
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getListNamesThunk = createAsyncThunk(
    "search",
    async() => {
        const response = await publicService.getListNames();
        return response;
    }
)