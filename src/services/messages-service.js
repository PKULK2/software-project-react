import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USER_URL = `${BASE_URL}/api/users`

const api = axios.create({
    withCredentials: true
});

export const createMessage = (userId, receiverId, message) => {
    return api.post(`${USER_URL}/${userId}/message/users/${receiverId}`, message)
        .then(response => response.data)
}

export const messageSentByUser = (userId, receiverId) => {
    return api.get(`${USER_URL}/${userId}/user/messages/${receiverId}`)
        .then(response => {
            console.log("Service Message Sent")
            console.log(response.data)
            return response.data
        })
}

export const messageReceivedByUser = (userId, receiverId) => {
   return  api.get(`${USER_URL}/${userId}/messages/user/${receiverId}`)
        .then(response => {
            console.log("Service Message Received")
            console.log(response.data)
            return response.data
        })
}