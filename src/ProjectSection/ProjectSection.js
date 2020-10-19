import React , { Component } from 'react';
import Projects from '../Projects/Projects';
import './ProjectSection.css';

import theBlackDogCombat from '../portfolioImages/theBlackDogCombat.png';
import quizAppImage from '../portfolioImages/quizAppImage.png';
import recipyFinderImage from '../portfolioImages/RecipeFinderDesktop.png';
import monsterCreatorImage from '../portfolioImages/DnD_Monster Creator Image.png';
import EscapeRoomImage1 from '../portfolioImages/Escape-Room-1.JPG';
import stockDatabase from '../portfolioImages/Stock_Database.webp';
import thisWebsite from '../portfolioImages/This_Website_Image.jpg';

/*Escape the room extra images*/
import EscapeRoomImage2 from '../portfolioImages/Escape-Room-2.JPG';
import EscapeRoomImage3 from '../portfolioImages/Escape-Room-3.JPG';
import EscapeRoomImage4 from '../portfolioImages/Escape-Room-4.JPG';
import EscapeRoomImage5 from '../portfolioImages/Escape-Room-5.JPG';





class ProjectSection extends Component {   

    render() {

        const escapeRoomExtraImages = [
            {image: EscapeRoomImage2, altText: 'Yeti escape room crime scene 1'},
            {image: EscapeRoomImage3, altText: 'Yeti escape room crime scene 2'},
            {image: EscapeRoomImage4, altText: 'Yeti escape room crime scene 3'},
            {image: EscapeRoomImage5, altText: 'Yeti escape room crime scene 4'}
        ]

        return(
            <div className='portfolioContainer'>

                <nav id = "portfolio_Nav" />
                
                <div className='potfolio_header_container'>
                    <h1 className='portfolio_header'>Projects</h1>
                </div>
               

                <Projects
                    projectName = 'This Website!'

                    projectImage = {thisWebsite}

                    projectImageAlt = 'Image of this website. UPDATE THIS WHEN THE WEBSITE IS DONE CSS AND ALL'

                    paragraph = {`This webside is developed with React to create modular code that can easily be applied to add to the website. Modular componants accept a
                    variety of different props and render differently depensing on which props are present. Pretty weird talking about a website I made 
                    on the website itself but its a good example of my experience as a developer using different tools.`}
                    
                    skills = 'Html, Css, Javascript, React framework'
                    
                    githubLink = 'https://github.com/Aamsegal/amsegal-react-portfolio'
                />

                {/*This called the project component and sends all the info for the project
                with props. Name, image, altImage, paragraph, githublink and the demo are
                all passed down and then used to create html based on the props*/}

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

                <Projects
                    projectName = 'Recipy Finder'

                    projectImage = {recipyFinderImage}

                    projectImageAlt = 'Recipe website screenshot'

                    paragraph = {`Users can choose any food, choose dietary and health restrictions. Then the user can search through many recipes presented,
                    learning about their ingredients, nutrient values and a link to further cooking details.`}

                    skills = 'Html, Css, Javascript, JQuery'
                    
                    githubLink = 'https://github.com/Aamsegal/Recipe-Finder-API-Capstone'

                    demo = 'https://aamsegal.github.io/Recipe-Finder-API-Capstone/'
                />
                
                <Projects 
                    projectName = 'Dnd Monster Creator App'

                    projectImage = {monsterCreatorImage}

                    projectImageAlt = 'Screenshot of the application'

                    paragraph = {`This application allows people to create a Dnd Monster. The app provides suggested starting points and renders the stats in a 
                    clean monster card for users to screen shot if they would like. Users can also create an acount and login to save monsters to access for future use.`}

                    skills = 'Html, Css, Javascript, React.js'

                    githubLink = 'https://github.com/Aamsegal/Dnd-Monster-Creator'

                    demo = 'https://dnd-monster-creator.vercel.app/'
                />

                <Projects 
                    projectName = 'Dnd Monster Creator Server'

                    projectImage = {stockDatabase}

                    projectImageAlt = 'Stock Database Photo'

                    paragraph = {`The server for the monster creator has multiple end points for the monster power suggestion, the users, the monsters and monster moves.`}

                    skills = 'Javascript, React.js, Express.js, PostgreSQL'

                    githubLink = 'https://github.com/Aamsegal/Dnd-Monster-Creator-Server'
                />

                <Projects
                    projectName = 'Escape Room'

                    projectImage = {EscapeRoomImage1}

                    projectImageAlt = 'Escape room, first room setup.'

                    extraImages = {escapeRoomExtraImages}

                    paragraph = {`Worked with a team of 10+ to design, create and run an escape room at our school for a weekend. I worked on 
                    three aspects of the escape room. I helped write the story, design and create the set and I was the lead on the puzzle team which
                    created fun and interactive puzzles that allowed the players to progress through the room.`}
                
                    testingExtraInfo = "Holy crap all 4 work thats wild"
                />

                <Projects
                    projectName = "Depression Awareness Game"

                    projectImage = {theBlackDogCombat}

                    projectImageAlt = "./portfolioImages/theBlackDogCombat.png"

                    paragraph = {`As the lead for the project, I worked with 3 undergraduate students do develop a game to teach and
                    raise awareness about depression. The player controls a character as they are taking a course about mental health. 
                    As they learn more, they need to apply what they learn in combat against a phisical manifestation of depression in
                    the game. They use moves to combat the enemies that are related to methods to help combat depression such as 
                    "papaya punch" for healthy eating or "Snooze" for the importance of the consistant sleep schedule.`}
                
                    testingExtraInfo = "The 5th one is working"
                />

                {/*In this situation, if both githubLink and demo link are N/a, the links wont render because of an if statement in the component*/}
            </div>
        )
    }
}

export default ProjectSection;
