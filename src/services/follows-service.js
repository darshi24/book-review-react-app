import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE;
// const BASE_URL = "http://localhost:4000/api";
const FOLLOWS_API = `${BASE_URL}/users`;

export const findIfFollowing = async(follower,followed) => {
    console.log("findIfFollowing service called...");
    const response = await axios.get(`${FOLLOWS_API}/${follower}/follows/${followed}`);
    console.log(response);
    return response.data;
}


export const userFollowsUser = async (follower, followed) => {
    const response = await axios.post(`${FOLLOWS_API}/${follower}/follows/${followed}`);
    return response.data;
}

export const userUnFollowsUser = async (follower, followed) => {
    const response = await axios.delete(`${FOLLOWS_API}/${follower}/follows/${followed}`);
    return response.data;
}

export const findFollowers = async (userID) => {
    console.log("findFollowers service called...");
    const response = await axios.get(`${FOLLOWS_API}/followers/${userID}`);
    return response.data;
}

export const findFollowersCount = async (userID) => {
    console.log("findFollowersCount service called...");
    const response = await axios.get(`${FOLLOWS_API}/followers/${userID}`);
    return response.data.length;
}

export const findFollowing = async (userID) => {
    console.log("findFollowing service called...");
    const response = await axios.get(`${FOLLOWS_API}/following/${userID}`);
    return response.data;
}

export const findFollowingCount = async (userID) => {
    console.log("findFollowingCount service called...");
    const response = await axios.get(`${FOLLOWS_API}/following/${userID}`);
    return response.data.length;
}



