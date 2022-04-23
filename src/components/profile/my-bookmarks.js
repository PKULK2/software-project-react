/**
 * This file is used to bookmark a tuit
 */

import {useEffect, useState} from "react";
import * as service from "../../services/bookmark-service";
import BookmarkList from "../bookmarks/bookmarkList";

import Tuits from "../tuits";


const MyBookmarks = () => {
    const [bookmark, setBookmark] = useState([]);
    const findMyBookmarks = () =>
        service.findBookmarkByUser("me")
            .then(bookmark => setBookmark(bookmark));
    console.log(bookmark);

    // on load invoke findMyBookmarks
    useEffect(findMyBookmarks, []);
    return(
        <div>

            <ul className="ttr-tuits list-group">
                {
                        <BookmarkList tuits={bookmark}/>
                }
            </ul>
        </div>
    );
};

export default MyBookmarks;