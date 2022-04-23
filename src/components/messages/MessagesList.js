import React, {useEffect} from "react";
import UserToMessage from "./UserToMessage";

const MessagesList = ({users =[]}) => {
    return(
        <div>
            <ul className="list-group">
                {
                    users.map(user => {
                        return(
                            <UserToMessage message={user}/>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default MessagesList;