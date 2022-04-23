import React, {useState} from "react";
import Users from "./users";

const FollowList = ({users = []}) => {
    return (
        <div className="my_scroll_div">
            <h1>People you can follow</h1>
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
