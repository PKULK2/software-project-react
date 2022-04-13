import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const FOLLOW_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

export const createFollow = (userId, followId) =>
    api.post(`${FOLLOW_API}/${userId}/follow/users/${followId}`)
        .then(response => response.data);

export const findOne = (userId, followId) =>
    api.get(`${FOLLOW_API}/${userId}/follow/users/${followId}`)
        .then(response => response.data);

export const findUserFollowing = (userId) =>
    api.get(`${FOLLOW_API}/${userId}/following`)
        .then(response => response.data);