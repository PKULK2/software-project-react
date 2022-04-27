import renderer from 'react-test-renderer'
import FollowList from "./followList";

test('the list of users renders correctly', ()=> {
    let randomUser = [
        {username: "Alex"}
    ]

    let user;
    renderer.act(()=> {
        user = renderer.create(
            <FollowList users={randomUser}/>
        )
    })
    const root = user.root;

    const seeUsers = root.findByProps({className:"ms-2 ttr-user-follow"});
    let oneUser = seeUsers.children[0];
    expect(oneUser).toBe("Alex")

    let randomUserNot = [
        {
            username: ""
        }
    ]

    let userNot;
    renderer.act(()=> {
        userNot = renderer.create(
            <FollowList users={randomUserNot}/>
        )
    })

    const root2 = userNot.root;
    const noUSer = root2.findByProps({className: "ms-2 ttr-user-follow"})
    let findNot = noUSer.children[0];
    expect(findNot).toBe(undefined)

})