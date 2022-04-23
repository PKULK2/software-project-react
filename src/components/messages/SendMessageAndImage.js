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
            <div className="mb-2 my_scroll_div chat-box">
               <DisplayMessages conversation={completeConversation}/>
            </div>
            <div className="row send-message">
                <div className="col-3 float-end">
                    <label className="custom-file-upload rounded float-left">
                        <input ref={filesRef} type="file"/>
                        <i className="fa fa-cloud-upload"/>
                    </label>
                    <span>
                        <button className=" custom-file-upload rounded" onClick={handleUpload}>
                            <i className="fa-solid fa-upload"/>
                        </button>
                    </span>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-11">
                            <input id="message" type="text" className="form-control rounded-pill w-10" placeholder="Message" onChange={(e)=> {setMessage(e.target.value)}}/>
                        </div>
                        <div className="col-1 mt-2">
                            <i onClick={sendMessage} className="fa-solid fa-paper-plane" style={{color: "#0b5ed7"}}/>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
};
export default SendMessageAndImage;