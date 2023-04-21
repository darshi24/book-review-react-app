import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";
import nytimesReducer from "./nytimes-reducer";
import reviewsReducer from "./reviews-reducer";
import wishlistReducer from "./wishlist-reducer";
const store = configureStore({
    reducer:{
        users: usersReducer,
        nytimes: nytimesReducer,
        reviews : reviewsReducer,
        wishlist : wishlistReducer,
    }
});

export default store;