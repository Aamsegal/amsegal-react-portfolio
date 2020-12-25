import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Projects.css';

class Projects extends Component {  

    state = {
        demo: this.props.demo,
        github: this.props.githubLink,
        paragraph: this.props.paragraph,
        projectImage: this.props.projectImage,
        projectImageAlt: this.props.projectImageAlt,
        projectName: this.props.projectName,
        extraParagraph: this.props.testingExtraInfo,
        projectSkills: this.props.skills,
        extraImages: this.props.extraImages,
        componentId: 'extraImagesContainer-' + uuidv4(),
    }
    
    componentDidMount() {
        const extraImages = this.state.extraImages;
        var extraImageHtml = '';

        if(typeof extraImages !== "undefined") {

            for(let i = 0; i < extraImages.length; i++) {

                //  renderPhoto() function is defined in index.html
                extraImageHtml += `<img class='secondary_Images' src='${extraImages[i].image}' alt='${extraImages[i].altText}' onclick="renderPhoto(this)"></img>`;
            }
               
        } else {

            return

        }

        
        document.getElementById(this.state.componentId).innerHTML = extraImageHtml;
    }

    checkForLinks = () => {
        const githubLink = this.state.github;
        const demo = this.state.demo;

        //if neither the github link or the demo link exist return nothing
        if (typeof githubLink === "undefined" && typeof demo === "undefined") {
  
            return
        
        //if both links exist it will return html for both
        } else if(typeof githubLink !== "undefined" && typeof demo !== "undefined") {

            return  <nav className='projects_Links_container'>
                <a target='_blank' rel="noopener noreferrer" href={githubLink} className='project_link'>Repo</a>
                <p className='divider_paragraph'>|</p>
                <a target='_blank' rel="noopener noreferrer" href={demo} className='project_link'>Demo</a>
            </nav>

        //if the github link does not exist, return the html for the demo link
        } else if (typeof githubLink !== "undefined") {

            return <nav className="projects_Links_container">
                <a target='_blank' rel="noopener noreferrer" href={githubLink} className='project_link'>Repo</a>
            </nav>
        
        //if the demo link does not exist return the html for the repo link
        } else if (typeof demo !== "undefined") {

            return  <nav className="projects_Links_container">
                <a target="_blank"  rel="noopener noreferrer" href={demo} className='project_link'>Demo</a>
            </nav>
        }

    }

    checkForImage = () => {
        const image = this.state.projectImage;

        if(typeof image !== "undefined") {

            return <img className='portfolio_Piece_Image' src={this.state.projectImage} alt={this.state.projectImageAlt}></img>
        
        } else {

            return

        }
    }

    checkForSkills = () => {
        const skills = this.state.projectSkills;

        if(typeof skills !== "undefined") {

            return <div className="skills_container">
                <h2 className="skills_header">Skills</h2>
                <p className="skills_list">{this.state.projectSkills}</p>
            </div>

        }
    }

    render() {

        //this.photoSelection();

        return (
            <div className='portfolioPiece' id={this.props.projectName}>
                <h2 className='portfolio_Piece_Name' >{this.state.projectName}</h2>

                {this.checkForImage()}

                <div className="extraImagesContainer" id={this.state.componentId}>

                </div>

                <p className='portfolio_Piece_Description' >{this.state.paragraph}</p>

                {this.checkForSkills()}

                {this.checkForLinks()}
            </div>
        )
    }
}

export default Projects;