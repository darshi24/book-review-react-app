import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE;
// const BASE_URL = "http://localhost:4000/api";
const SECURITY_API = `${BASE_URL}/users`;

const api = axios.create({
    withCredentials: true
});

export const updateUser = (newUser) => {
    console.log(newUser._id);
    return axios.put(`${SECURITY_API}/${newUser._id}`, newUser);
};

export const deleteUser = (id) => {
    return axios.delete(`${SECURITY_API}/${id}`);
};

export const findUserByID = (id) => {
    return axios.get(`${SECURITY_API}/user/${id}`)
}

export const findUsersByRole = async (role) => {
    const response = await axios.get(`${SECURITY_API}/role/${role}`);
    return response.data.length;
}

export const register =  async (user) => {
    const response = await api.post(`${SECURITY_API}/register`, user);
    return response.data;
}

export const login = async (user) => {
    const response = await api.post(`${SECURITY_API}/login`, user);
    return response.data;
}

export const logout = async (user) => {
    const response  = await api.post(`${SECURITY_API}/logout`, user);
    return response.data;
}

export const profile = async () => {
    console.log("Asking for profile from node");
    const response = await api.get(`${SECURITY_API}/profile`);
    console.log(response);
    return response.data;
}
