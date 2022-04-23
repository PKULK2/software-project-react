import React, {useState} from "react";
import Users from "./users";

const FollowList = ({users = []}) => {
    return (
        <div>
            <h1>Users</h1>
            <ul className="list-group">
                {
                    users.map(user => {
                        return(
                            <Users myUsers={user}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default FollowList;