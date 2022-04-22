import React from "react";
import * as bookmarkService from "../../services/bookmark-service";
import {Link} from "react-router-dom";
import TuitVideo from "../tuits/tuit-video";
import TuitImage from "../tuits/tuit-image";
import TuitStats from "../tuits/tuit-stats";

const BookmarkedTuit = ({tuit}) => {
    //const navigate = useNavigate();
    const daysOld = (tuit) => {
        const now = new Date();
        const nowMillis = now.getTime();
        const posted = new Date(tuit.postedOn);
        const postedMillis = posted.getTime();
        const oldMillis = nowMillis - postedMillis;
        let old = 0.0;
        const secondsOld = oldMillis/1000.0;
        const minutesOld = secondsOld/60.0;
        const hoursOld = minutesOld/60.0;
        const daysOld = hoursOld/24.0;
        if(daysOld > 1) {
            old = Math.round(daysOld) + 'd';
        } else if(hoursOld > 1) {
            old = Math.round(hoursOld) + 'h';
        } else if(minutesOld > 1) {
            old = Math.round(minutesOld) + 'm';
        } else if(secondsOld > 1) {
            old = Math.round(secondsOld) + 's';
        }
        return old;
    }

    /*const createBookmark = () =>
        bookmarkService.createBookmark("me",tuit._id)*/

    return(
        // <li onClick={() => navigate(`/tuit/${tuit._id}`)}
        <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
            <div className="pe-2">
                {
                    tuit.postedBy &&
                    <img src={`../images/${tuit.bookmarkedTuit.postedBy.username}.jpg`}
                         className="ttr-tuit-avatar-logo rounded-circle"/>
                }
            </div>
            <div className="w-100">
                <Link to={`/tuit/${tuit._id}`}>
                    <i className="float-end fas fa-circle-ellipsis me-1"></i>
                </Link>
                <h2
                    className="fs-5">
                    {tuit.bookmarkedTuit.postedBy && tuit.bookmarkedTuit.postedBy.username}
                    @{tuit.bookmarkedTuit.postedBy && tuit.bookmarkedTuit.postedBy.username}
                    </h2>
                {tuit.bookmarkedTuit.tuit}
                {
                    tuit.youtube &&
                    <TuitVideo tuit={tuit}/>
                }
                {
                    tuit.image &&
                    <TuitImage tuit={tuit}/>
                }
                <TuitStats tuit={tuit.bookmarkedTuit} />
            </div>
        </li>
    );
}
export default BookmarkedTuit;