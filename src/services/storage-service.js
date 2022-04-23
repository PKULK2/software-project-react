import app from "../firebase-app"
import {
    getDownloadURL,
    getMetadata,
    getStorage,
    listAll,
    ref,
    uploadBytes,
} from "firebase/storage"

import {createImage} from "./image-service";
import {useState} from "react";

const storage = getStorage()
const storageRef = ref(storage)

export const getImageSrc = (image) => {
    const imageRef = ref(storage, image)
    return getDownloadURL(imageRef)
}

export const listAllImages = async (userId, receiverId) => {
    const rootRef = ref(storage)
    return listAll(rootRef)
        .then((res) => {
            const urlPromises = res.items
                .map((itemRef) => {
                    return getDownloadURL(itemRef);
                });
            return Promise.all(urlPromises)
        })
}

export const uploadImage = (file, receiverId) => {
    const imageRef = ref(
        storage, file.name)
    return uploadBytes(imageRef, file).then( (image) => {
        return getDownloadURL(imageRef).then(url => {
            let urlImage = url;
             createImage("me", receiverId, {urlImage}).then(display => {
                console.log("Image sent");
            });
        })
    })

}

