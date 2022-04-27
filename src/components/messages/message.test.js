import renderer from "react-test-renderer";
import DisplayMessages from "./DisplayMessages";
import Conversation from "./Conversation";
import {MemoryRouter, Routes, Route, Router} from "react-router";
import {findByText, render, waitFor} from "@testing-library/react";
import SendMessageAndImage from "./SendMessageAndImage";
import React from "react";
import {createMemoryHistory} from 'history'

test('message renders appropriately', async ()=> {

    let receivedMessage = [
        {
            sender: "623e3a61517b7786db6df04a",
            receiver: "623e0b1a736aafb975f32d21",
            message: "Hey there, thi is Ashley's sister. Do you remember me?",
            sentOn: "2022-04-23 07:47:36"
        }
    ]

    // const receiverId = '623e3a61517b7786db6df04a'
    // render(
    //     <MemoryRouter initialEntries={[`message/${receiverId}`]}>
    //         <Routes>
    //             <Route path={'message/:uid'} element={<DisplayMessages conversation={receivedMessage}/>}/>
    //         </Routes>
    //     </MemoryRouter>
    // );
    // await waitFor(()=> expect(findByText(receivedMessage.message)).toBeInTheDocument());

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
            sender: '623e3a61517b7786db6df04a',
            receiver: '623e0b1a736aafb975f32d21'
        }),
        useRouteMatch: () => ({url: '/message/623e0b1a736aafb975f32d21'}),
    }));

    export const renderWithRouter = (
        ui,
            {
                path = '/',
                route ='/',
                history = createMemoryHistory({initialEntries:[route]})
            } = {}
    ) => {
        return {
            ...render(
                <Router history={history}>
                    <Route path={path} component={ui}/>
                </Router>
            )
        };
    };

    it('message received', () => {
        const {getByText} = renderWithRouter(<DisplayMessages conversation={receivedMessage}/>, {
            route: "/message/623e0b1a736aafb975f32d21",
            path: "/message/:uid"
        });
        expect(getByText(receivedMessage.message)).toBeInTheDocument();
    })



    // let sentMessage = [
    //     {
    //         sender: "623e0b1a736aafb975f32d21",
    //         receiver: "623e3a61517b7786db6df04a",
    //         message: "Hi there, yes I remember you!",
    //         sentOn: "2022-04-23 07:42:30"
    //     }
    // ]
    //
    // const t = [
    // {
    //     sender: "623e3a61517b7786db6df04a",
    //         receiver: "623e0b1a736aafb975f32d21",
    //     message: "Hey there, thi is Ashley's sister. Do you remember me?",
    //     sentOn: "2022-04-23 07:47:36"
    // }
    // ]
    //
    //
    // let complete = [
    //     ...receivedMessage,
    //     ...sentMessage
    // ]
    //
    // let messages;
    // renderer.act(()=>{
    //     messages = renderer.create(
    //         <DisplayMessages conversation={receivedMessage}/>
    //         //<Conversation messages={t}/>
    //     )
    // })


})
