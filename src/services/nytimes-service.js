import axios from "axios";
const BASE_URL = "https://api.nytimes.com/svc/books/v3";
const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;

export const getListNames = () => {
    console.log(process.env.NYTIME_API_KEY);
    const response = axios.get(`${BASE_URL}/lists/names.json?api-key=${API_KEY}`);
    return response;
};

export const getBooksForListName = (listName) => {
    const response = axios.get(`${BASE_URL}/lists/current/${listName}.json?api-key=${API_KEY}`)
    return response;
}

export const getBookDetailsAndReviews = (isbn) => {
    const response = axios.get(`${BASE_URL}/reviews.json?isbn=${isbn}&api-key=${API_KEY}`)
    return response;
}