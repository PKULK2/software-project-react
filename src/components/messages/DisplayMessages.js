import React, {useEffect, useState} from "react";
import Conversation from "./Conversation";

const DisplayMessages = ({conversation =[]}) => {
    return (
        <>
            <ul className="list-group">
                {
                    conversation && conversation.sort((a,b) => new Date(a.sentOn) - new Date(b.sentOn))
                    .map(message => {
                        return (
                            <Conversation messages={message}/>
                        )
                     })
                }
            </ul>
        </>
    )
};
export default DisplayMessages;