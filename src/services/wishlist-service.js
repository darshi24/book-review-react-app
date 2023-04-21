import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE;
const USERS_API = `${BASE_URL}/users`;

export const getWishlist = async(currentUserID) => {
    const response = await axios.get(`${USERS_API}/${currentUserID}/wishlist`);
    if(response.data != null) {
        return response.data.wishlist;
    }else{
        return null;
    }

}

export const getWishlistCount = async(currentUserID) => {
    const response = await axios.get(`${USERS_API}/${currentUserID}/wishlist`);
    if(response.data != null) {
        return response.data.wishlist.length;
    }else{
        return 0;
    }

}

export const addToWishlist = async(currentUserID, book) => {
    const response = await axios.post(`${USERS_API}/${currentUserID}/wishlist`,book);
    return response.data;
}

export const removeFromWishlist = async(currentUserID, wishlistBookID) => {
    const response = await axios.delete(`${USERS_API}/${currentUserID}/wishlist/${wishlistBookID}`);
    return response.data;
}