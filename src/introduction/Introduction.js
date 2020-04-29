import React, {Component} from 'react';

class Introduction extends Component {
    render() {
        return (
            <div className = 'Introduction'>
                <ul>
                    <li>{this.props.introLine1}</li>
                    <li>{this.props.introLine2}</li>
                    <li>{this.props.introLine3}</li>
                    <li>{this.props.introLine4}</li>
                    <li>{this.props.introLine5}</li>
                </ul>
            </div>
        )
    }
}

export default Introduction;