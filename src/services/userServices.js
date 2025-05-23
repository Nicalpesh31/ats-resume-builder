import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

// Get all users
export const getUsers = () => {
    return axios.get(API_URL);
};

// Create a new user
export const createUser = (user) => {
    return axios.post(API_URL, user);
};

// Update user
export const updateUser = (id, user) => {
    return axios.put(`${API_URL}/${id}`, user);
};

// Delete user
export const deleteUser = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
