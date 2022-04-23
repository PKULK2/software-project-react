import React, {useEffect, useRef, useState} from "react";
import * as messageService from "../../services/messages-service"
import {useParams} from "react-router-dom";
import * as imageService from "../../services/image-service";
import * as service from '../../services/storage-service'
import {profile} from "../../services/security-service";
import DisplayMessages from "./DisplayMessages";


const SendMessageAndImage = () => {
    const [message, setMessage] = useState("")
    const [srcs, setSrcs] = useState([]);
    const [messageSent, setMessageSent] = useState([]);
    const [messageReceived, setMessageReceived] = useState([]);
    const [imagesSent, setImageSent] = useState([]);
    const [imagesReceived, setImageReceived] = useState([]);

    const params = useParams();
    const filesRef = useRef();

    const messageSendToUser = () => {
        messageService.messageReceivedByUser("me", params.uid)
            .then(sentToUser => setMessageReceived(sentToUser))
    }

    const messageSendByUser = () => {
        messageService.messageSentByUser(params.uid, "me")
            .then(sentByUser => setMessageSent(sentByUser))
    }

    const imagesReceivedByUser = () => {
        imageService.imagesSentToUser(params.uid, "me")
            .then(images => setImageReceived(images))
    }

    const imagesSentByUser = () => {
        imageService.imagesSentByUser("me", params.uid)
            .then(images => setImageSent(images))
    }

    const handleUpload = () => {
        Object
            .entries(filesRef.current.files)
            .forEach(([key, file]) => {
                service.uploadImage(file, params.uid)
                    .then(imagesReceivedByUser)
            })
    }
    const completeConversation = [
        ...messageSent,
        ...messageReceived,
        ...imagesSent,
        ...imagesReceived
    ]

    useEffect(()=> {
        let isMounted = true;
        messageSendByUser();
        messageSendToUser();
        imagesSentByUser();
        imagesReceivedByUser();
        return () => {
            isMounted = false;
        }
    }, []);
    const clearMessage = () => {
        const messageInput = document.getElementById("message")
        messageInput.value = "";
    }
    const sendMessage = async () => {
        await messageService.createMessage("me", params.uid, {message})
            .then(() => {
                messageSendToUser();
                clearMessage();
            });
    }
     return(
         <>
            <div className="mb-2 my_scroll_div container">
               <DisplayMessages conversation={completeConversation}/>
            </div>
            <div className="row send-message float-end">-c
                <div className="col">
                <span>
                    <input multiple ref={filesRef} type="file"/>
                    <span>
                        <i className="fa-solid fa-link" onClick={handleUpload}/>
                    </span>
                </span>
                {/*    <label className="file-button">*/}
                {/*        Browse For Image!*/}
                {/*        <span><input type="file" id="myfile" name="myfile"/></span>*/}
                {/*    </label>*/}
                </div>
                <div className="col">
                    <input id="message" type="text" className="form-control rounded-pill w-10" placeholder="Message" onChange={(e)=> {setMessage(e.target.value)}}/>
                </div>
                <div className="col">
                    <i onClick={sendMessage} className="fa-solid fa-paper-plane"/>
                </div>
            </div>
         </>
    )
};
export default SendMessageAndImage;