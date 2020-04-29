import React, { Component } from 'react';
import Introduction from './introduction/Introduction'
import Projects from './Projects/Projects'
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className = "App">
        <nav>
          <h1>Aaron Segal</h1>
          <Link to ='/'>Home</Link>
          <Link to ='/'>Projects</Link>
          <Link to ='/'>Contact</Link>
        </nav>

        {/*This is setting up the nav bar. Has my name at the top, and links to different parts of
        my portfolio on the right. Later, these links will be used to jump between sections in the
        portfolio*/}

        <header>
          <h1>Hi, I'm Aaron</h1>
        </header>

        <main>
          <Introduction 
          introLine1 = 'I like games, writing, cooking and dogs, all dogs.'

          introLine2 = 'Above is one of my dogs, Chance. I love him very much.'

          introLine3 = {`I have a lot of experience with HTML, CSS, Javascript, 
          jQuery and React to the point where I sometimes think in those languages.`}

          introLine4 ='I have worked on more group projects than I can remember, so working with people is both enjoyable, and second nature.'

          introLine5 = {`I want to design games to teach. I have experience teaching many different topics from martial arts to 3D modeling 
          and love every second of it (well not grading). I make the games teach and grade for me.`}
          />
          {/*Each of the line props sent down and used as a different list element for the introduction*/}

          <h1>Projects</h1>

          {/*<Route
          path='/Project/:projectId'
          component={Projects}/>*/}

          <Projects
          projectName = 'Web Quiz'

          projectImage = 'https://i.gyazo.com/576dd3d34299c4c1f9d5e61831d290f1.png'

          projectImageAlt = 'Quiz website screenshot'

          paragraph = {`Animal quiz questions and answers are from a Javascript object. 
          App keeps track of the users answers and gives them live feedback as to if the answer was right or wrong. (Skills: Html, Css, Javascript, Jquery)`}
          
          githubLink = 'https://github.com/Aamsegal/quizStartingPage'

          demo = 'https://aamsegal.github.io/quizStartingPage/index.html'

          />
          {/*This called the project component and sends all the info for the project
          with props. Name, image, altImage, paragraph, githublink and the demo are
          all passed down and then used to create html based on the props*/}


          <Projects
          projectName = 'Recipy Finder'

          projectImage = 'https://raw.githubusercontent.com/Aamsegal/Recipe-Finder-API-Capstone/master/Recipe%20Finder%20Desktop%20Screenshot.png'

          projectImageAlt = 'Recipe website screenshot'

          paragraph = {`Users can choose any food, choose dietary and health restrictions. Then the user can search through many recipes presented,
          learning about their ingredients, nutrient values and a link to further cooking details.
          (Skills: Html, Css, Javascript, JQuery, Ramda path function, which is used to prevent errors when a path cannot be found)`}
          
          githubLink = 'https://github.com/Aamsegal/Recipe-Finder-API-Capstone'

          demo = 'https://aamsegal.github.io/Recipe-Finder-API-Capstone/'

          />

          

        </main>
        {/*The main section will be where I have most of the contents of the portfolio. Projects,
        extra info, contact and more. There will be small little blurbs about each sectionand then 
        a button to learn more for each one where I go more in depth about what I did. */}
      </div>
    )
  }
}

export default App;