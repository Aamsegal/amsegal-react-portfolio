import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PorfolioContext from '../Context/PortfolioContext'

class Projects extends Component {  
    static contextType = PorfolioContext;

    state = {
        demo: this.props.demo,
        github: this.props.githubLink,
        paragraph: this.props.paragraph,
        projectImage: this.props.projectImage,
        projectImageAlt: this.props.projectImageAlt,
        projectName: this.props.projectName,
        extraParagraph: this.props.testingExtraInfo,
    }
    
    componentDidMount() {
        const extraProjectInfo = this.state
        this.context.setExtraInfo(extraProjectInfo);
        console.log('This is the componnent did mount part')
        console.log(this.context)
    }

    render() {
        
        //extraInfo = {Paragraph: this.props.testingExtraInfo};

        const demo = this.props.demo;
        const githubLink = this.props.githubLink;
        const paragraph = this.props.paragraph;
        const projectImage = this.props.projectImage;
        const projectImageAlt = this.props.projectImageAlt;
        const projectName = this.props.projectName;
        const extraParagraph = this.props.testingExtraInfo;

        //this.projectPlusInfo(extraParagraph);
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

        if (typeof(githubLink) && typeof(demo) == 'undefined') {
            
            areThereLinks = (<h1>This Seems to work because its not working</h1>)

        }

        {/**/}

        return (
            <div className = 'portfolioPiece'>
                <h1>{projectName}</h1>
                <img src={projectImage} alt={projectImageAlt}></img>
                <p>{paragraph}</p>
                {areThereLinks}
                <Link to={`/projectExplanation/${this.uniqueId}`}>
                    Click here for more!
                </Link>
            </div>
        )
    }
}

export default Projects;