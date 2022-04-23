import React, {useEffect, useState} from "react";
import {findUserFollowing} from "../../services/follow-service";
import MessagesList from "./MessagesList";

const Message = () => {
    const [users, setUsers] = useState([]);
    const findUsersInUsersFollowingList = async () => {
        await findUserFollowing("me")
            .then(user => setUsers(user));
    }
    //console.log(users);
    useEffect(findUsersInUsersFollowingList, []);
    return (
        <>
            {(()=>{
                if(users === null) {
                    return (
                        <h1>No friends to message</h1>
                    )
                }
                else {
                    return(
                        <MessagesList users={users}/>
                    )
                }
            })()}
        </>
    )
};
export default Message;