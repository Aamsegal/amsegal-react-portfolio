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

        /*if (githubLink && demo === true) {
            return
            const linksHtml = (<nav className = 'links'>
            <a target = "_blank" rel='noopener noreferrer' href={githubLink}>Github</a>
            <p>|</p>
            <a target = "_blank" rel='noopener noreferrer' href={demo}>Demo</a>
            </nav>)
        } else {
            <h1>Testing if this works</h1>
        }*/

        return (
            <div className = 'portfolioPiece'>
                <h1>{projectName}</h1>
                <img src={projectImage} alt={projectImageAlt}></img>
                <p>{paragraph}</p>
                <nav className = 'links'>
                    <a target = "_blank" rel='noopener noreferrer' href={githubLink}>Github</a>
                    <p>|</p>
                    <a target = "_blank" rel='noopener noreferrer' href={demo}>Demo</a>
                </nav>
            </div>
        )
    }
}

export default Projects;