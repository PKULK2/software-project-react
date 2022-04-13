import React, {useState} from "react";
import {findAllUsers} from "../../services/users-service";
import {createFollow} from "../../services/follow-service";
import Users from "./users";

const Follow = () => {
    const [users, setUsers] = useState([]);
    console.log(users)
    const findUsers = async () => {
        await findAllUsers()
            .then(user => setUsers(user));
    }
    const followUser = async ({followingId}) => {
        await createFollow("me", {followingId})
    }

    return (
        <div>
            <h1>Users</h1>
           <ul>
               {
                   users.map(user => {
                       return(
                           <Users followUser={()=> {followUser(user._id)} }/>
                       )
                   })
               }
           </ul>
        </div>
    )
}
export default Follow;
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
