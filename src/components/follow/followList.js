import React, {useState} from "react";
import Users from "./users";

const FollowList = ({users = []}) => {
    let keyI = 0;
    return (
        <div className="my_scroll_div">
            <h1>People you can follow</h1>
           <ul className="list-group">
               {
                   users.map(user => {
                       return(
                           <Users key={++keyI} myUsers={user}/>
                       )
                   })
               }
           </ul>
        </div>
    )
}
export default FollowList;
