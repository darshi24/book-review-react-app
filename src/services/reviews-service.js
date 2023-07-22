import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE;
// const BASE_URL = 'http://localhost:4000/api';
const REVIEWS_API = `${BASE_URL}/reviews`;


export const getAllReviews = async() => {
    const response = await axios.get(`${REVIEWS_API}`);
    return response.data.length;
}

export const createReview = async (review) => {
    const response = await axios.post(`${REVIEWS_API}`,review);
    return response.data;
}

export const updateReview = async (review) => {
    const response = await axios.put(`${REVIEWS_API}/${review._id}`,review);
    return response.data;
}

export const deleteReview = async (rid) => {
    const response = await axios.delete(`${REVIEWS_API}/${rid}`);
    return response.data
}

export const getReviewsForBookISBN = async (isbn) => {
    const response = await axios.get(`${REVIEWS_API}/book/${isbn}`);
    return response.data;
}

export const getReviewsForAuthor = async (id) => {
    const response = await axios.get(`${REVIEWS_API}/author/${id}`);
    return response.data;
}

export const getReviewsCountForAuthor = async (id) => {
    const response = await axios.get(`${REVIEWS_API}/author/${id}`);
    return response.data.length;
}