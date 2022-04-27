import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import "./messages.css";

const Conversation = ({messages}) => {
    let keyI = 0;
    const params = useParams();
    return (
        <div>
            {
                (() => {
                if(((messages && messages.sender !== params.uid)
                            && (messages && messages.image))
                        && ((messages && messages.sender._id !== params.uid)
                            && (messages && messages.image))) {
                        return(
                            <>
                                <div className="chat">
                                    <li key={++keyI} className="list-group-item border-0">
                                        <div className="fa-pull-right">
                                            <img className="rounded images" src={messages.image} alt={"Not available"}/>
                                        </div>
                                    </li>
                                </div>
                            </>
                        )
                    }
                    else if(((messages && messages.receiver !== params.uid)
                            && (messages && messages.image))
                        && ((messages && messages.sender._id === params.uid)
                            && (messages && messages.image))) {
                        return(
                            <>
                                <div className="chat">
                                    <li key={++keyI} className="list-group-item border-0">
                                        <div className="fa-pull-left">
                                            <img className="rounded images" src={messages.image} alt={"Not available"}/>
                                        </div>
                                    </li>
                                </div>
                            </>
                        )
                    }
                    else {
                        if ((messages && messages.sender !== params.uid)
                            && (messages && messages.sender._id !== params.uid)) {
                            return (
                                <div className="chat">
                                    <li key={++keyI} className="list-group-item border-0">
                                        <span id="message-test" className="message my-message">
                                            {messages.message}
                                        </span>
                                    </li>
                                </div>
                            )
                        } else if ((messages && messages.receiver === params.uid)
                            || (messages && messages.receiver._id !== params.uid)) {
                            return (
                                <div className="chat">
                                    <li key={++keyI} className="list-group-item border-0">
                                        <span id="not-message-test" className="message not-my-message">
                                            {messages.message}
                                        </span>
                                    </li>
                                </div>
                            )
                        }
                }
                })()
            }
        </div>
    )
}
export default Conversation;