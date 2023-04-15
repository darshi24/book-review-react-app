import * as authService from "../services/auth-service"
import {createAsyncThunk} from "@reduxjs/toolkit";

export const updateUserThunk = createAsyncThunk(
    "users/update",
    async (user) => {
        await authService.updateUser(user);
        return user;
    }
);

export const deleteUserThunk = createAsyncThunk("users/delete", async (id) => {
    await authService.deleteUser(id);
    return id;
});

export const loginThunk = createAsyncThunk("users/login", async (user) => {
    const response = await authService.login(user);
    return response;
});

export const logoutThunk = createAsyncThunk("users/logout", async () => {
    const response = await authService.logout();
    return response;
});

export const registerThunk = createAsyncThunk(
    "users/register",
    async (user) => {
        const response = await authService.register(user);
        return response;
    }
);

export const profileThunk = createAsyncThunk("users/profile", async () => {
    const response = await authService.profile();
    return response;
});


