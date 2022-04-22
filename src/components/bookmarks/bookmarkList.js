import React, {useState} from "react";
import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as bookmarkService from "../../services/bookmark-service";
import BookmarkedTuit from "./bookmarkedTuits";

const BookmarkList = ({tuits = []}) => {

    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        <BookmarkedTuit tuit = {tuit}/>)
                }
            </ul>
        </div>
    );
}

export default BookmarkList;