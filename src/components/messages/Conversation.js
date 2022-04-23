import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import "./messages.css";

const Conversation = ({messages}) => {
    const params = useParams();
    if(!messages) {
        return(
            <>
                <h2>No conversation</h2>
            </>
        )
    }
    else {
        return (
            <>
                {
                    (() => {
                    if(((messages && messages.sender !== params.uid)
                                && (messages && messages.image))
                            && ((messages && messages.sender._id !== params.uid)
                                && (messages && messages.image))) {
                            return(
                                <div className="chat">
                                    <li className="list-group-item border-0" key={params.uid}>
                                        <span className="fa-pull-right">
                                            <img style={{height: 150}} src={messages.image} alt={"Not available"}/>
                                        </span>
                                    </li>
                                </div>
                            )
                        }
                        else if(((messages && messages.receiver === params.uid)
                                && (messages && messages.image))
                            && ((messages && messages.sender._id !== params.uid)
                                && (messages && messages.image))) {
                            return(
                                <li className="list-group-item border-0" key={params.uid}>
                                    <div className="fa-pull-left">
                                        <img style={{height: 150}} src={messages.image} alt={"Not available"}/>
                                    </div>
                                </li>
                            )
                        }
                        else {
                        if ((messages && messages.sender !== params.uid)
                            && (messages && messages.sender._id !== params.uid)) {
                            return (
                                <div className="chat">
                                    <li className="list-group-item border-0">
                                        <span className="message my-message">
                                            {messages.message}
                                        </span>
                                    </li>
                                </div>
                            )
                        } else if ((messages && messages.receiver === params.uid)
                            || (messages && messages.receiver._id !== params.uid)) {
                            return (
                                <div className="chat">
                                    <li className="list-group-item border-0">
                                        <span className="message not-my-message">
                                            {messages.message}
                                        </span>
                                    </li>
                                </div>
                            )
                        }
                    }
                    })()
                }
            </>
        )
    }
}
export default Conversation;