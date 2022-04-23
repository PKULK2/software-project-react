import React, {useEffect, useState} from "react";
import {messageSentByUser, createMessage} from "../../services/messages-service"
import {useParams} from "react-router-dom";
import {createImage} from "../../services/image-service";
import {findOne} from "../../services/follow-service";
import storage from "../../firebase";

const SendMessage = () => {
    const [message, setMessage] = useState("")
    const params = useParams();
    const messageSendByUser = async () => {
        await messageSentByUser("me", params.uid);
    }
    const sendMessage = async () => {
        await createMessage("me", params.uid, {message})
    }
    const [IDS, setIDS] = useState({});
    const [image, setImage] = useState('');
    const userReference = async () => {
        await createImage("me", users._id)
            .then(message => setIDS(message));
    }
    userReference();
    const uploadImage = async () => {
        const find = await findOne("me", users._id);
        if(find) {
            if (image == null)
                return;
            storage.ref(`/images${image.name}`).put(image, IDS)
                .on("state_changed", alert("success"), alert);
        }
    }

    useEffect(messageSendByUser, []);
     return(
        <>
            <h1>USers</h1>
            <span>
                <i onClick={sendImage} className="fa-solid fa-link"/>
            </span>
            <input className="rounded-pill" placeholder="Message" onChange={(e)=> {setMessage(e.target.value)}}/>
            <span>
                <i onClick={sendMessage} className="fa-solid fa-paper-plane"/>
            </span>
        </>
    )
};
export default SendMessage;