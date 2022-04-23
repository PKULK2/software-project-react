import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const UserToMessage = ({message}) => {
    const navigate = useNavigate();
    const goToMessage = () => {
        navigate(`/message/${message.following._id}`);
    }
    return (
        <>
            {(()=>{
                if(message.following && message.following._id === null || message.following && message.following._id === "undefined") {
                    return (
                        <>
                            <h3>User no longer exist</h3>
                        </>
                    )
                }
                else {
                    return (
                        <li key={message.following && message.following._id} onClick={goToMessage} className="list-group-item">
                            {message.following && message.following.username}
                        </li>
                    )
                }
            })()}
        </>
    )
};
export default UserToMessage;
