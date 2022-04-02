import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const USER_URL = `${BASE_URL}/api/users`
const api = axios.create({
    withCredentials: true
});
export const createMessage = (userId, receiverId) => {
    api.post(`${USER_URL}/${userId}/message/user/${receiverId}`)
        .then(response => response.data)
}

export const messageSentByUser = (userId) => {
    api.get(`${USER_URL}/${userId}/user/messages`)
        .then(response => response.data)
}

export const messageReceivedByUser = (userId) => {
    api.get(`${USER_URL}/${userId}/messages/user`)
        .then(response => response.data)
}