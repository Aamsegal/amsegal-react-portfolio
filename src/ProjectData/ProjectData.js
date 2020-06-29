import React, { Component } from 'react';
import quizAppImage from '../portfolioImages/quizAppImage.png';

class ProjectData extends Component {

    uniqueId() {
        const idCharacters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const id_Length = 10;
        let randomId = '';
    
        for (let i = 0; i <id_Length.length; i++) {
            randomId += idCharacters.charAt(Math.floor(Math.floor() * idCharacters));
        }
    }

    ProjectData = [
        [
            uniqueId(),
                {
                    projectName: "This website",
                    projectImage: "Placeholder",
                    projectAltImage: "Image of this website",
                    paragraph: `This porfolio webside was developed to display my skills and abilities in web development, game design and more. Pretty weird
                    talking about a website I made on the website itself but its a good example of my experience as a developer using different tools such as
                    developing a website using react. (Skills: Html, Css, Javascript, React framework`,
                    
                    githubLink: "https://github.com/Aamsegal/amsegal-react-portfolio",
                    demo: "https://github.com/Aamsegal/amsegal-react-portfolio",


                    extraInfo: `This website uses multiple react components to create a modular website. All of the date comes from array that generates a unique Id and
                    contains inportant info about the project such as projact name, an image, and explanation and more. The components then access this information and import
                    it and use it to fill the required data based on what the project is. For the extra information, the link to the information gets the unique id from that
                    information set and when clicked, a component looks through the array of data for an item with the same id then presents the information of that project`
                },

                {
                    projectName: "Web Quiz",
                    projectImage: {quizAppImage},
                    projectAltImage: "Quiz website screenshot",
                    paragraph: `Animal quiz questions and answers are from a Javascript object. 
                    App keeps track of the users answers and gives them live feedback as to if the answer was right or wrong. (Skills: Html, Css, Javascript, Jquery)`,
                    
                    githubLink: "https://github.com/Aamsegal/quizStartingPage",
                    demo: "https://aamsegal.github.io/quizStartingPage/index.html",


                    extraInfo: `Simple quiz app created using javascript. The app generates the list of questions based on an array which contains the question, answerd 1-4,
                    the index of the correct answer and the index of the users answer (which is set as 4 indicating the user has not selected an answer yet). The app presents
                    the questions to the user and then creates buttons that will record the users answer and then alter the user answer in the array to match the index of the 
                    question the user chose. Then at the end, the user is presented with all the questions and whether or not they got it correct.`
                },
        ]
    ]

    render() {
        return (
            {ProjectDate}
        )
    }
}

export default ProjectData;