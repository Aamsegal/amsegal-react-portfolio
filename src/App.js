import React, { Component } from 'react';
import './App.css'
import ContactInfo from './ContactInfo/ContactInfo'
import ghubIcon from './portfolioImages/githubIcon.png'
import linkedinIcon from './portfolioImages/linkedin-icon.png'
import emailIcon from './portfolioImages/email-Icon.png'
import PorfolioContext from './Context/PortfolioContext'
import { Route, Link } from 'react-router-dom';
import ProjectSection from './ProjectSection/ProjectSection'
import ProjectExplanations from './ProjectExplanations/ProjectExplanations';



class App extends Component {

  state = {
    extraInfo: [],
  };

  setExtraInfo = extraInfoData => {
      
    const currentState = this.state.extraInfo;
    
    currentState.push(extraInfoData);

    
    this.setState({
      extraInfo: currentState,
    })
    //console.log(this.state.extraInfo);
  }

  

  render() {

    const contextValue = {
      extraInfo: this.state.extraInfo,
      setExtraInfo: this.setExtraInfo,
    }

    return(
      <main className = "App">
        <div className = 'navbar' id = 'navbar'>
          <h1 className = 'navbar-name'>Aaron Segal</h1>
            <ul className ="navigation">
              {/*<li><a className="jumper" href="#Home">Home</a></li>*/}
              <li><Link to = {'/'}>Home</Link></li>
              <li><Link to = '/'>Projects</Link></li>
              <li><Link to = '/'>Contact</Link></li>
            </ul>
          
        </div>

        {/*This is setting up the nav bar. Has my name at the top, and links to different parts of
        my portfolio on the right. Later, these links will be used to jump between sections in the
        portfolio*/}

        <div className = 'main' id = 'main'>

          <PorfolioContext.Provider value={contextValue}>

            <Route
              path = 'projects/projectId'
              component = {ProjectExplanations}
            />

            <Route 
              exact path='/'
              component= {ProjectSection}
            />

          </PorfolioContext.Provider>   

        <div id = 'contact' className = 'contact'>
          <h1>Contact</h1>
          <nav id='icon-links' className = 'icon-links'>
          
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

          </nav>
        </div>

        </div>
        {/*The main section will be where I have most of the contents of the portfolio. Projects,
        extra info, contact and more. There will be small little blurbs about each sectionand then 
        a button to learn more for each one where I go more in depth about what I did. */}
      </main>
    )
  }
}

export default App;