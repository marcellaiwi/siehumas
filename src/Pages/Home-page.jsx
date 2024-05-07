import React from "react";
import Sidebar from "../components/Sidebar";
import ContentHome from "../components/ContentHome";
import DrawerSidebar from "../components/Drawer";

const Homepage = () => {
    return (
        <>
            <Sidebar />
            {/* <DrawerSidebar /> */}
            <ContentHome />
        </>
    );
}

export default Homepage;