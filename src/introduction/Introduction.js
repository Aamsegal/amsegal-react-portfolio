import React, {Component} from 'react';
import './Introduction.css'

class Introduction extends Component {
    
    componentDidMount() {
        const introLineProps = this.props;
        var introLineList = '<p className="intro-paragraph">';

        //itterated through all values of the props and appends the li information to the introLineList variable
        //  then after the loop it closes the ul and sets the inner html to equal the variable
        for (let [key, value] of Object.entries(introLineProps)) {
            introLineList += ' ' + value;
        }

        introLineList += '<p/>'

        document.getElementById("introLine_sentence_Container").innerHTML = introLineList;
    }

    render() {

        

        return (
            <div className = 'introdunction'>
                <h1 className='introHeader'>Hi, I'm Aaron</h1>

                <div className='introLine_sentence_Container' id='introLine_sentence_Container'></div>

            </div>
        )
    }
}

export default Introduction;