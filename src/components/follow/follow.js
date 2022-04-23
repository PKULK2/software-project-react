import React, {useEffect, useState} from "react";
import FollowList from "./followList";
import {findAllUsers} from "../../services/users-service";

const Follow = () => {
    const [users, setUsers] = useState([]);
    const findUsers = async () => {
        await findAllUsers()
            .then(user => setUsers(user));
    }
    useEffect(findUsers,[])
    return (
        <FollowList users={users}/>
    )
};
export default Follow;