import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USER_URL = `${BASE_URL}/users`

const api = axios.create({
    withCredentials: true
});

export const createBookmark = (uid, tid) => {
    return api.post(`${USER_URL}/${uid}/bookmark/tuits/${tid}`)
        .then(response => response.data)
}

export const findBookmarkByUser = (userId) => {
    return api.get(`${USER_URL}/${userId}/bookmark/tuits`)
        .then(response => response.data)
}