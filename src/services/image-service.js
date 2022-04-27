import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const MESSAGE_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

export const createImage = (senderId, receiverId, image) =>
   api.post(`${MESSAGE_API}/${senderId}/image/user/${receiverId}`, image)
        .then(response => response.data);

export const imagesSentByUser = (senderId, receiverId) => {
    return api.get(`${MESSAGE_API}/${senderId}/images/user/${receiverId}`)
        .then(response => {
            //console.log(response.data, "RECEIVED")
            return response.data
        })
}

export const imagesSentToUser = (senderId, receiverId) =>
    api.get(`${MESSAGE_API}/${senderId}/user/images/${receiverId}`)
        .then(response => {
            //console.log(response.data, "SENT")
            return response.data
        })

