import React, {useEffect, useState} from "react";
import {createFollow, findOne} from "../../services/follow-service";
import blankImage from "../../images/blank-profile-picture-973460_1280.webp"
import './users.css'
const Users = ({myUsers}) => {
    const [user, setUser] = useState({});
    const findOneFollow = () => {
        findOne("me", myUsers._id)
            .then(userFollow => setUser(userFollow));
    }
    const followUser = async () => {
        await createFollow("me", myUsers._id)
            .then(findOneFollow);
    }
    //console.log(myUsers._id);
    useEffect(findOneFollow, []);
    //findOneFollow();
    return (
        <li className="list-group-item">
            <span>
                <img style={{height: 40}} src={blankImage} className="rounded-circle"/>
            </span>
            <span className="ms-2">{myUsers.username}</span>
            <span>
                {(()=> {
                    if(user === null) {
                        return (
                            <button className="btn btn-primary rounded-pill fa-pull-right" onClick={followUser}>Follow</button>
                        )
                    }
                    else {
                        return (
                            <a className="btn btn-primary rounded-pill fa-pull-right">Followed</a>
                        )
                    }
                })()}
            </span>
        </li>

    )
};
export default Users;
