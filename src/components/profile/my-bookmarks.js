import {useEffect, useState} from "react";
import * as service from "../../services/bookmark-service";

const MyBookmarks = () => {
    const [bookmark, setBookmark] = useState([]);
    const findMyBookmarks = () =>
        service.findBookmarkByUser("my")
            .then(bookmark => setBookmark(bookmark));
    // on load invoke findMyBookmarks
    useEffect(findMyBookmarks, []);
    return(
        <div></div>
    );
};

export default MyBookmarks;