import renderer from 'react-test-renderer';
import BookmarkList from "../components/bookmarks/bookmarkList";
import {BrowserRouter} from "react-router-dom";


test('render bookmark tuits', () => {
    const bookmarkTuit = [
        {bookmarkedTuit: {postedBy: {_id:"623f4f2895d1046035c3f804", username: "bob"}, tuit: "Hey there!"}}
    ]

    let bookmark;

    renderer.act(()=> {
      bookmark = renderer.create(
          <BrowserRouter>
          <BookmarkList tuits={bookmarkTuit}/></BrowserRouter>)
    })

    const root = bookmark.root;
    const seeBookmarkTuit = root.findByProps({className: "w-100"})
    let tuit = seeBookmarkTuit.children[2]
    expect(tuit).toBe("Hey there!")

    const seeBookmarkUser = root.findByProps({className: "fs-5"})
    let user = seeBookmarkUser.children[2]
    expect(user).toBe("bob")

})
