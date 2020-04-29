import React, {Component} from 'react';

class Projects extends Component {
    render() {
        const demo = this.props.demo;
        const githubLink = this.props.githubLink;
        const paragraph = this.props.paragraph;
        const projectImage = this.props.projectImage;
        const projectImageAlt = this.props.projectImageAlt;
        const projectName = this.props.projectName;
        /*Setting the values for the props to use in this component*/

        let areThereLinks = (
            <nav className = 'links'>
                <a target = "_blank" rel='noopener noreferrer' href={githubLink}>Github</a>
                <p>|</p>
                <a target = "_blank" rel='noopener noreferrer' href={demo}>Demo</a>
            </nav>
        )
        {/*As a base, are there links, which is called in the return html below, will present two links, one to the github repo
        and one to the demo.*/}

        if (githubLink && demo === 'N/a') {
            
            areThereLinks = (<h1>This Seems to work because its not working</h1>)

        }

        {/**/}

        return (
            <div className = 'portfolioPiece'>
                <h1>{projectName}</h1>
                <img src={projectImage} alt={projectImageAlt}></img>
                <p>{paragraph}</p>
                {areThereLinks}
                <p>Click here for more</p>
            </div>
        )
    }
}

export default Projects;