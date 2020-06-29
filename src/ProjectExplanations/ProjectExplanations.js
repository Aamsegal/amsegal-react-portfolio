import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProjectExplanations extends Component {

    render() {
        const extraInfo = this.context.extraInfo;
        console.log(extraInfo)
        return (
            <Link to ='/'>This Should Link back to the main page</Link>
        )
    }
}

export default ProjectExplanations;