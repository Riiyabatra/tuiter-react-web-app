import React from "react";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";
import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <h2>Home</h2>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};

export default HomeComponent;