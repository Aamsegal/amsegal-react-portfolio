import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material"

import "./navigationBar.css"

function NavigationBar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        
        setIsOpen(!isOpen)

    }

    const navigate = useNavigate();

    /* takes param from the buttons to navigate to different parts of the app */
    const handleNavigate = (address) => {

        navigate(`/${address}`)

    }

    return(

        <div className="navBarContainer">

            {/* <i className="burgerIcon">&#9776;</i> */}

            <div className="dropDownNavBar">

                {/* <Grid container spacing={2}> */}

                    <p className="navBarButton" onClick={() => handleNavigate("")}>Home</p>
                    <p className="navBarButton" onClick={() => handleNavigate("skills")}>Skills</p>
                    <p className="navBarButton" onClick={() => handleNavigate("contact")}>Contact</p>

                {/* </Grid> */}


            </div>
            

        </div>
    )

};

export default NavigationBar;