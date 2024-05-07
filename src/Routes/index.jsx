import React from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from "../Pages/Home-page";
import InputPage from "../Pages/Input-page";
import FeedPage from "../Pages/Feed-page";
import AccountPage from "../Pages/Account-page";
import StoryPage from "../Pages/Story-page";
import YoutubePage from "../Pages/Youtube-page";
import EditPage from "../Pages/Edit-page";
import LoginPage from "../Pages/Login-page";

const Routing  = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/">
                <Route path="input" element={<InputPage />}/>
                <Route path="action1" element={<FeedPage />}/>
                <Route path="action2" element={<StoryPage />}/>
                <Route path="action3" element={<YoutubePage />}/>
                <Route path="account" element={<AccountPage />}/>
                <Route path="edit" element={<EditPage />}/>
                <Route path="login" element={<LoginPage />}/>
            </Route>
        </Routes>
    )
}

export default Routing;