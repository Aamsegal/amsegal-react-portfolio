import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NavigationBar from "./Version_Two/navigationBar/navigationBar";
import AboutMe from "./Version_Two/aboutMe/aboutMe";
import Skills from "./Version_Two/Skills/skills";
import Contact from "./Version_Two/contact/contact";
import PageNotFound from "./Version_Two/pageNotFound/pageNotFound";

import "./appVersionTwo.css"

function AppVersionTwo() {

    const navigate = useNavigate();

    /* takes param from the buttons to navigate to different parts of the app */
    const handleNavigate = (address) => {

        navigate(`/${address}`)

    }

    return(

        <div className="mainAppContainer">   

            {/* <NavigationBar />

            <Routes>

                <Route path="/" Component={AboutMe}/>
                <Route path="skills" Component={Skills}/>
                <Route path="contact" Component={Contact}/>
                <Route path="*" Component={PageNotFound}/>

            </Routes> */}

            <div 
                className="michContainer"
                style={{
                    width: "100%",
                    display: "flex",
                    "justify-content": "center"
                }}
            >

                <div 
                    className="imageContainer"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        "align-items": "center",
                        width: "80%"
                    }}
                >

                    <img 
                        src="https://i.imgur.com/FCjpeQd.jpg" 
                        alt="image"
                        style={{width: "200px", marginTop: "10px"}}
                    />

                    <img 
                        src="https://i.imgur.com/UY7l7VR.jpg"
                        alt="image"
                        style={{width: "200px", marginTop: "10px"}}
                    />

                    <img 
                        src="https://i.imgur.com/UY7l7VR.jpg"
                        alt="image"
                        style={{width: "200px", marginTop: "10px"}}
                    />

                    <img 
                        src="https://i.imgur.com/UY7l7VR.jpg"
                        alt="image"
                        style={{width: "200px", marginTop: "10px"}}
                    />

                </div>
                
            </div>

        </div>
    )

};

export default AppVersionTwo;