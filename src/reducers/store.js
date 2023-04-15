import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";
import nytimesReducer from "./nytimes-reducer";

const store = configureStore({
    reducer:{
        users: usersReducer,
        nytimes: nytimesReducer,
    }
});

export default store;