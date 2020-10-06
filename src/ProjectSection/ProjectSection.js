import React , { Component } from 'react';
import Projects from '../Projects/Projects';
import theBlackDogCombat from '../portfolioImages/theBlackDogCombat.png';
import quizAppImage from '../portfolioImages/quizAppImage.png';
import recipyFinderImage from '../portfolioImages/RecipeFinderDesktop.png';
import monsterCreatorImage from '../portfolioImages/DnD_Monster Creator Image.png';
import EscapeRoomImage1 from '../portfolioImages/Escape-Room-1.JPG';

/*Escape the room extra images*/
import EscapeRoomImage2 from '../portfolioImages/Escape-Room-2.JPG';
import EscapeRoomImage3 from '../portfolioImages/Escape-Room-3.JPG';
import EscapeRoomImage4 from '../portfolioImages/Escape-Room-4.JPG';
import EscapeRoomImage5 from '../portfolioImages/Escape-Room-5.JPG';





class ProjectSection extends Component {   

    render() {

        const escapeRoomExtraImages = [
            {image: EscapeRoomImage2, altText: 'altText'},
            {image: EscapeRoomImage3, altText: 'altText'},
            {image: EscapeRoomImage4, altText: 'altText'},
            {image: EscapeRoomImage5, altText: 'altText'}
        ]

        return(
            <div className='portfolioContainer'>

                <nav id = "portfolio_Nav" />
            
                <h1 id = 'Portfolio'>Projects</h1>

                <Projects
                    projectName = 'This Website!'

                    projectImage = 'https://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg'

                    projectImageAlt = 'Image of this website. UPDATE THIS WHEN THE WEBSITE IS DONE CSS AND ALL'

                    paragraph = {`This porfolio webside was developed to display my skills and abilities in web development, game design and more. Pretty weird
                    talking about a website I made on the website itself but its a good example of my experience as a developer using different tools such as
                    developing a website using react. (Skills: Html, Css, Javascript, React framework)`}

                    githubLink = 'https://github.com/Aamsegal/amsegal-react-portfolio'

                    demo = 'https://github.com/Aamsegal/amsegal-react-portfolio'
                />

                {/*This called the project component and sends all the info for the project
                with props. Name, image, altImage, paragraph, githublink and the demo are
                all passed down and then used to create html based on the props*/}

                <Projects
                    projectName = 'Web Quiz'

                    projectImage = {quizAppImage}

                    projectImageAlt = 'Quiz website screenshot'

                    paragraph = {`Animal quiz questions and answers are from a Javascript object. 
                    App keeps track of the users answers and gives them live feedback as to if the answer was right or wrong. (Skills: Html, Css, Javascript, Jquery)`}
                    
                    githubLink = 'https://github.com/Aamsegal/quizStartingPage'

                    demo = 'https://aamsegal.github.io/quizStartingPage/index.html'
                />

                <Projects
                    projectName = 'Recipy Finder'

                    projectImage = {recipyFinderImage}

                    projectImageAlt = 'Recipe website screenshot'

                    paragraph = {`Users can choose any food, choose dietary and health restrictions. Then the user can search through many recipes presented,
                    learning about their ingredients, nutrient values and a link to further cooking details.
                    (Skills: Html, Css, Javascript, JQuery, Ramda path function, which is used to prevent errors when a path cannot be found)`}
                    
                    githubLink = 'https://github.com/Aamsegal/Recipe-Finder-API-Capstone'

                    demo = 'https://aamsegal.github.io/Recipe-Finder-API-Capstone/'
                />
                
                <Projects 
                    projectName = 'Dnd Monster Creator App'

                    projectImage = {monsterCreatorImage}

                    paragraph = {`Placeholder paragraph`}

                    githubLink = 'https://github.com/Aamsegal/Dnd-Monster-Creator'

                    demo = 'https://dnd-monster-creator.vercel.app/'
                />

                <Projects 
                    projectName = 'Dnd Monster Creator Server'

                    paragraph = {`Placeholder Paragraph`}

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
