/**
 * This file collects all the bookmarked tuits which will be displayed in
 * the bookmarks section.
 */

import React, {useState} from "react";
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