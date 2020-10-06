import React, { Component } from 'react';
import './App.css'
import ContactInfo from './ContactInfo/ContactInfo'
import ghubIcon from './portfolioImages/githubIcon.png'
import linkedinIcon from './portfolioImages/linkedin-icon.png'
import emailIcon from './portfolioImages/email-Icon.png'
import Introduction from './introduction/Introduction.js';
import { Link } from 'react-router-dom';
import ProjectSection from './ProjectSection/ProjectSection'



class App extends Component {

  hideExtraImageContainer() {
    document.getElementById("extra-Photo-Enlarge-Blackout").style.display = "none";
  }

  render() {

    return(
      <main className = "App">

        <div id="extra-Photo-Enlarge-Blackout">

          <div className="extra-Photo-Enlarge-Container">
            
            <div className="extra-Photo-Enlarge-Exit">
              <button onClick={() => this.hideExtraImageContainer()}>X</button>
            </div>
            
            <img id="extra-Photo-Enlarge-Image" src=''></img>
          </div>
            
        </div>

        {/*This is setting up the nav bar. Has my name at the top, and links to different parts of
        my portfolio on the right. Later, these links will be used to jump between sections in the
        portfolio*/}
        <div className='navbar'>
          <h1 className = 'navbar-name'>Aaron Segal</h1>
            <div className ="navbar-jumpers">
              {/*<li><a className="jumper" href="#Home">Home</a></li>*/}
              <a className="jumper" href="#Home" className="jumper-Link">Home</a>
              <a className="jumper" href="#portfolio_Nav" className="jumper-Link">Projects</a>
              <a className="jumper" href="#icon-links" className="jumper-Link">Contact</a>
            </div>
          
        </div>

        
        <nav id ='Home' className='Home'></nav>
        <div className='main_content_container'>
          
          {/*Each of the line props sent down and used as a different list element for the introduction*/}
          <Introduction 

                  introLine1 = 'I like games, writing, cooking and dogs, all dogs.'

                  introLine2 = 'Above is one of my dogs, Chance. I love him very much.'

                  introLine3 = {`I have a lot of experience with HTML, CSS, Javascript, 
                  jQuery and React to the point where I sometimes think in those languages.`}

                  introLine4 ='I have worked on more group projects than I can remember, so working with people is both enjoyable, and second nature.'

                  introLine5 = {`I want to design games to teach. I have experience teaching many different topics from martial arts to 3D modeling 
                  and love every second of it (well not grading). I make the games teach and grade for me.`}
              />
              

            
            
            <ProjectSection />

            <div className = 'contact'>

              <h1 className = "contact_Section_Header">Contact</h1>

              <nav id='icon-links' className='icon-links'/>
              
                <ContactInfo 
                  contactType = 'Linked In'
                  contactLink = 'https://www.linkedin.com/in/aaron-segal-427368143/'
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

      </main>
    )
  }
}

export default App;