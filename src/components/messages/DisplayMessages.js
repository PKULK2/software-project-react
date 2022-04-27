import React, {useEffect, useState} from "react";
import Conversation from "./Conversation";

const DisplayMessages = ({conversation =[]}) => {
    let keyI = 0;
    return (
        <>
            <ul className="list-group">
                {
                    conversation && conversation.sort((a,b) => new Date(a.sentOn) - new Date(b.sentOn))
                    .map(message => {
                        return (
                            <Conversation key={++keyI} messages={message}/>
                        )
                     })
                }
            </ul>
        </>
    )
};
export default DisplayMessages;