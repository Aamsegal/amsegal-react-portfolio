import React from "react";
import { useNavigate } from "react-router-dom";

import "./navBar.css"

function NavBar() {

    const navigate = useNavigate();

    /* takes param from the buttons to navigate to different parts of the app */
    const handleNavigate = (address) => {

        navigate(`/${address}`)

    }

    return(

        <div className="navBarContainer">

                <button onClick={() => handleNavigate("")}>Home</button>
                <button onClick={() => handleNavigate("skills")}>Skills</button>
                <button onClick={() => handleNavigate("contact")}>Contact</button>

        </div>
    )

};

export default NavBar;