import React, { Component } from 'react';
import './App.css'
import ContactInfo from './ContactInfo/ContactInfo'

import ghubIcon from './portfolioImages/githubIcon.png'
import linkedinIcon from './portfolioImages/linkedin-icon.png'
import emailIcon from './portfolioImages/email-Icon.png'
import BurgerIcon from './portfolioImages/BurgerIcon.png'

import Introduction from './introduction/Introduction.js';


//import { Link } from 'react-router-dom';
import ProjectSection from './ProjectSection/ProjectSection'



class App extends Component {

  hideExtraImageContainer() {
    document.getElementById("extra-Photo-Enlarge-Blackout").style.display = "none";
  }

  mobileBurgerMenu(displayCondition) {
    
    if(displayCondition === 'show') {
      document.getElementById("navbar-jumpers-mobile").style.display = "block";
    }else if(displayCondition === 'hide') {
      document.getElementById("navbar-jumpers-mobile").style.display = "none";
    }
  }

  render() {

    return(
      <main className = "App">

        {/*this div is used for then photo enlarging when a user click on one of the
        extra photos that can exists in a project*/}
        <div id="extra-Photo-Enlarge-Blackout">

          <div className="extra-Photo-Enlarge-Container">
            
            <div className="extra-Photo-Enlarge-Exit">
              <button onClick={() => this.hideExtraImageContainer()}>X</button>
            </div>
            
            <div className="extraPhotoImageContainer">
              <img id="extra-Photo-Enlarge-Image" alt="current enlarged"src=''></img>
            </div>
          </div>
            
        </div>

        {/*This is setting up the nav bar. Has my name at the top, and links to different parts of
        my portfolio on the right. Later, these links will be used to jump between sections in the
        portfolio*/}
        <div className='navbar'>
          <h1 className = 'navbar-name'>Aaron Segal</h1>
            <div className="navbar-dropdown">
              <img src={BurgerIcon} alt='burgerIcon' className="navbar-dropdown-hover" onClick={() => this.mobileBurgerMenu('show')}/>
              <div className ="navbar-jumpers">
                {/*<li><a className="jumper" href="#Home">Home</a></li>*/}
                <a href="#Home" className="jumper-Link">Home</a>
                <a href="#portfolio_Nav" className="jumper-Link">Projects</a>
                <a href="#icon-links" className="jumper-Link">Contact</a>
              </div>

              <div className="navbar-jumpers-mobile" id="navbar-jumpers-mobile">
                <a href="#Home" className="jumper-Link" onClick={() => this.mobileBurgerMenu('hide')}>Home</a>
                <a href="#portfolio_Nav" className="jumper-Link" onClick={() => this.mobileBurgerMenu('hide')}>Projects</a>
                <a href="#icon-links" className="jumper-Link" onClick={() => this.mobileBurgerMenu('hide')}>Contact</a>
              </div>
            </div>
          
        </div>

        
        <nav id ='Home' className='Home'></nav>
        <div className='main_content_container'>
          
          {/*Each of the line props sent down and used as a different list element for the introduction*/}
          <Introduction 

                  introLine1 = {`I have a master's in education game design as well as experience in web development.`}

                  introLine2 = {`I have experience with HTML, CSS, Javascript, React, and Express to the point where I sometimes think in those languages.`}

                  introLine3 ={`I thoroughly enjoy challenges and problem-solving in every aspect of my life whether that's beating a boss in a game, 
                  finding out how to make my favorite recipe a little better, or what is causing this bug to break my code....oh a typo.`}

                  introLine4 = {`I incorporate my love for problem-solving with excitement to work with others. Seeing how others work and problem 
                  solve helps open my mind to new ways of thinking and I love getting to apply those ideas into my everyday life.`}
              />
            
            <ProjectSection />

            <div className = 'contact'>

              <h1 className = "contact_Section_Header">Contact</h1>
              
              {/*
              <div className="emailContainer">
                <p className="email">Amsegal93@gmail.com</p>
              </div>
              */}
              <nav id='icon-links' className='icon-links'/>

                <div className="contactInfoContainer">

                  <ContactInfo 
                    contactType = 'Linked In'
                    contactLink = 'https://www.linkedin.com/in/developeramsegal/'
                    contactTypeImage = {linkedinIcon}
                    contactTypeAltImage = 'Linked in Logo' 
                  />

                  <ContactInfo 
                    contactType = "Github"
                    contactLink = 'https://github.com/Aamsegal'
                    contactTypeImage = {ghubIcon}
                    contactTypeAltImage = 'Github Logo'
                  />

                  
                  <ContactInfo 
                    contactType = 'Email'
                    contactLink = 'mailto:amsegal93@gmail.com'
                    contactTypeImage = {emailIcon}
                    contactTypeAltImage = 'Email Icon'
                  />
                  
              </div>

            </div>

          </div>

      </main>
    )
  }
}

export default App;