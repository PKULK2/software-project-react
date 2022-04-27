/**
 * This file collects all the bookmarked tuits which will be displayed in
 * the bookmarks section.
 */

import React, {useState} from "react";
import BookmarkedTuit from "./bookmarkedTuits";

const BookmarkList = ({tuits = []}) => {
let keyI = 0;
    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        <BookmarkedTuit tuit = {tuit} key = {++keyI}/>)
                }
            </ul>
        </div>
    );
}

export default BookmarkList;