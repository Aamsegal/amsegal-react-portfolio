import React , { Component } from 'react';
import Projects from '../Projects/Projects';
import './ProjectSection.css';

import theBlackDogCombat from '../portfolioImages/TheBlackDog/theBlackDogCombat.png';
import quizAppImage from '../portfolioImages/QuizApp/quizAppImage.png';
import whatsToEatImage from '../portfolioImages/WhatsToEat/Whats_to_Eat_Screenshot_1.png';
import monsterCreatorImage from '../portfolioImages/DndMonsterCreator/DnD_Monster Creator Image.png';
import EscapeRoomImage1 from '../portfolioImages/EscapeRoom/Escape-Room-1.JPG';
import stockDatabase from '../portfolioImages/Stock_Database.webp';
import thisWebsite from '../portfolioImages/ThisWebsite/This_Website_Image.jpg';
import whatsToEatServerImage from '../portfolioImages/WhatsToEat/Whats_To_Eat_Server_Image.jpg';

/*Escape the room extra images*/
import EscapeRoomImage2 from '../portfolioImages/EscapeRoom/Escape-Room-2.JPG';
import EscapeRoomImage3 from '../portfolioImages/EscapeRoom/Escape-Room-3.JPG';
import EscapeRoomImage4 from '../portfolioImages/EscapeRoom/Escape-Room-4.JPG';
import EscapeRoomImage5 from '../portfolioImages/EscapeRoom/Escape-Room-5.JPG';

/*Whats to eat extra images*/
import whatsToEatImage2 from '../portfolioImages/WhatsToEat/Whats_to_Eat_Screenshot_2.png';
import whatsToEatImage3 from '../portfolioImages/WhatsToEat/Whats_to_Eat_Screenshot_3.png';

const escapeRoomExtraImages = [
    {image: EscapeRoomImage2, altText: 'Yeti escape room crime scene 1'},
    {image: EscapeRoomImage3, altText: 'Yeti escape room crime scene 2'},
    {image: EscapeRoomImage4, altText: 'Yeti escape room crime scene 3'},
    {image: EscapeRoomImage5, altText: 'Yeti escape room crime scene 4'}
]

const whatsToEatExtraImages = [
    {image: whatsToEatImage2, altText: "Whats to eat screenshot 2"},
    {image: whatsToEatImage3, altText: "Whats to eat screenshot 3"}
]

class ProjectSection extends Component {   

    render() {

        

        return(
            <div className='portfolioContainer'>

                <nav id = "portfolio_Nav" />
                
                <div className='portfolio_header_container'>
                    <h1 className='portfolio_header'>Projects</h1>
                </div>
               

                <Projects
                    projectName = 'This Website!'

                    projectImage = {thisWebsite}

                    projectImageAlt = 'Computer clip art'

                    paragraph = {`This website is developed with React to create modular code that can easily be applied to add to the website. 
                    Modular components accept a variety of different props and render differently depending on which props are present. 
                    Pretty weird talking about a website I made on the website itself but it's a good example of my experience as a developer using different tools.`}
                    
                    skills = 'HTML, CSS, Javascript, React framework'
                    
                    githubLink = 'https://github.com/Aamsegal/amsegal-react-portfolio'
                />

                {/*This called the project component and sends all the info for the project
                with props. Name, image, altImage, paragraph, githublink and the demo are
                all passed down and then used to create html based on the props*/}
                
                {/*
                <Projects
                    projectName = 'Web Quiz'

                    projectImage = {quizAppImage}

                    projectImageAlt = 'Quiz website screenshot'

                    paragraph = {`Animal quiz questions and answers are from a Javascript object. 
                    App keeps track of the users answers and gives them live feedback as to if the answer was right or wrong.`}

                    skills = 'Html, Css, Javascript, Jquery'
                    
                    githubLink = 'https://github.com/Aamsegal/quizStartingPage'

                    demo = 'https://aamsegal.github.io/quizStartingPage/index.html'
                />
                */}

                <Projects
                    projectName = "What's to Eat!"

                    projectImage = {whatsToEatImage}

                    projectImageAlt = 'Recipe website screenshot'

                    extraImages = {whatsToEatExtraImages}

                    paragraph = {`This application helps people find recipes based on their specific needs. 
                    Users can search for recipes by choosing ingredients to include/exclude and filter out common allergies. 
                    If they create an account, they can save and access any recipes that they like for future use. Have some Salmon, Pasta, and Garlic? 
                    Maybe 'Smoked Salmon Pasta' is your thing? If not there are many more recipes to access. 
                    This website uses the EDAMAM recipe API to access a large variety of recipes.`}

                    skills = 'HTML, CSS, Javascript, JQuery'
                    
                    githubLink = 'https://github.com/Aamsegal/WhatsToEat'

                    demo = 'https://whats-to-eat.vercel.app/'
                />
                
                <Projects
                    projectName = "What's to Eat Server"

                    projectImage = {whatsToEatServerImage}

                    projectImageAlt = 'Cookbook'

                    paragraph = {`The backend logic for the What's to Eat App. 
                    Here we both manage user requests for logging in as well as saving or accessing their recipes. 
                    Users log in and receive a login token. When any changes are made to the server, the login token is used to access the user's information server-side 
                    and then recipes and ingredients can be connected to a user account keeping a user's information on the server so it's never sent from front to 
                    backend or vice versa.`}

                    skills = 'Javascript, React.js, Express.js, PostgreSQL'

                    githubLink = 'https://github.com/Aamsegal/Whatstoeat-server'
                />

                <Projects 
                    projectName = 'Dnd Monster Creator App'

                    projectImage = {monsterCreatorImage}

                    projectImageAlt = 'Screenshot of the application'

                    paragraph = {`This application allows people to create a D&d Monster. 
                    The app provides suggested starting points and renders the stats in a clean monster card for users to screenshot if they would like. 
                    Users can also create an account and login to save monsters to access for future use.`}

                    skills = 'HTML, CSS, Javascript, React.js'

                    githubLink = 'https://github.com/Aamsegal/Dnd-Monster-Creator'

                    demo = 'https://dnd-monster-creator.vercel.app/'
                />

                <Projects 
                    projectName = 'Dnd Monster Creator Server'

                    projectImage = {stockDatabase}

                    projectImageAlt = 'Stock Database Photo'

                    paragraph = {`The server for the monster creator has multiple endpoints for the monster power suggestion, users, monsters, and their moves.`}

                    skills = 'Javascript, React.js, Express.js, PostgreSQL'

                    githubLink = 'https://github.com/Aamsegal/Dnd-Monster-Creator-Server'
                />

                <Projects
                    projectName = 'Escape Room'

                    projectImage = {EscapeRoomImage1}

                    projectImageAlt = 'Escape room, first room setup.'

                    extraImages = {escapeRoomExtraImages}

                    paragraph = {`Worked with a team of 10+ to design, create, and run an escape room at our school for a weekend. I worked on three aspects of the escape room. 
                    I helped write the story, design and create the set and I was the lead on the puzzle team which created fun and interactive puzzles that allowed the 
                    players to progress through the room.`}
                />

                <Projects
                    projectName = "Depression Awareness Game"

                    projectImage = {theBlackDogCombat}

                    projectImageAlt = "Screenshot from 'The Black Dog' game"

                    paragraph = {`As the lead for the project, I worked with 3 undergraduate students to develop a game to teach and raise awareness about depression. 
                    The player controls a character as they are taking a course about mental health. 
                    As they learn more, they need to apply what they learn in combat against a physical manifestation of depression in the game. 
                    They use moves to combat the enemies that are related to methods to help combat depression such as "papaya punch" for healthy eating or 
                    "Snooze" for the importance of a consistent sleep schedule.`}
                />

                {/*In this situation, if both githubLink and demo link are N/a, the links wont render because of an if statement in the component*/}
            </div>
        )
    }
}

export default ProjectSection;
