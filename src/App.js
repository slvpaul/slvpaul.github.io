import './App.css';
import { React, useState } from 'react';
import photo from './photo.png';
import gh from './github.png';
import ln from './linkedin.png';
import edu from './education.png';
import exp from './experience.png';
import tct from './tictactoe.png';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [changeContent, setChangeContent] = useState(0);
  const [changeProject, setChangeProject] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleHome = () => {
    setChangeContent(0);
  }

  const togglePortfolio = () => {
    setChangeContent(1);
  }

  const toggleAbout = () => {
    setChangeContent(2);
  }

  const toggleProject = () => {
    if (changeProject < 2) {
    var newValue = changeProject + 1;
    setChangeProject(newValue)
    } else { setChangeProject(0) }
    
  }

  return (
    <div className="App">
      <div className="Nav">
        {changeContent !== 0 ? <div className="Button" onClick={toggleHome}>Home</div> : <div className="buttonActive">Home</div>}
        <div className="Button-container">
          {changeContent !== 1 ? <div className="Button" onClick={togglePortfolio}>Projects</div> : <div className='buttonActive'>Projects</div>}
          {changeContent !== 2 ? <div className="Button" onClick={toggleAbout}>About</div> : <div className='buttonActive'>About</div>}
        </div>
      </div>
      <div className="hamburger-nav">
        <div className="logo">Paulo Silva</div>
        {menuOpen ? null : <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div></div>}
            {menuOpen ? <div className="menu-links">
                <div className="x" onClick={toggleMenu}>X</div>
                <div>Projects</div>
                <div>About</div>
                <div>Contact</div>
               </div> : null}
      </div>
      {changeContent === 0 ? <div className='body-container'>
      <div className="profile">
        <div className='photo-container'>
          <img src={photo} alt="Profile" />
        </div>
        <div className="text-container">
          <p className="text1">Hello, I'm</p>
          <h1 className="text2">Paulo Silva</h1>
          <p className="text3">Software Developer</p>
          <div className='social-container'>
          <img className='icon' src={ln} alt="linkedin"/>
          <img className='icon' src={gh} alt="github"/>
        </div>
        </div>
      </div>
      </div> : null}
      {changeContent === 1 ? <div className='project-container'>
        <div className='projects'>
        <h1 className='text2'>Projects</h1>
        <div className='proj-container1'>
          {changeProject === 1 ? <div className='proj-container2'>
            <h2 className='project-title'>SMS Spam detection</h2>
            <p className='proj-description'>This project uses the pandas and sklearn libraries in python along with a data set containing labeled sms messages to train a machine learning model to make predictions on whether a text message is spam or not.</p>
            <div className='proj-btn-container'>
              <button className='project-btn'>Github</button>
            </div>
          </div> : null}
          {changeProject === 0 ? <div className='proj-container2'>
            <h2 className='project-title'>Delivery simulator</h2>
            <p className='proj-description'>This project simulates the delivery of packages by 3 trucks and is a variation on the traveling salesman problem. It utilizes a self-adjusting hash table as the data structure that stores the packages and, to optimize the delivery route, it uses a variation of a nearest neighbor algorithm with time complexity of O(n^2).</p>
            <div className='proj-btn-container'>
              <button className='project-btn'>Github</button>
            </div>
          </div> : null}
          {changeProject === 2 ? <div className='proj-container2'>
            <div className='proj-container3'>
              <img src={tct} alt="Project 1" className='project-img'/>
            </div>
            <h2 className='project-title'>Tic Tac Toe</h2>
            <p className='proj-description'>This project is a Tic-Tac-Toe game written in React on the frontend. The backend of the game was built using Node.js with the socket.io library for real-time communication between players. It uses nginx as a web server and the entire project was containerized using Docker.</p>
            <div className='proj-btn-container'>
              <button className='project-btn'>Github</button>
            </div>
          </div> : null}
        </div>
        <button className="next-button" onClick={toggleProject}>Next project >></button>
      </div></div> : null}
      {changeContent === 2 ? <div className='about'>
        <h1 className='text2'>About Me</h1>
        <div className='section container'>
            <div className='about-details-container'>
              <div className='about-containers'>
                <div className='details-container'>
                  <img className='icon' src={edu} alt="gh"/>
                  <h3>Education</h3>
                  <p>Bachelor of Science</p>
                  <h2>Computer Science</h2>
                </div>
                <section id="experience">
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Technical Skills</h2>
            <h3 class="experience-sub-title2">Languages:</h3>
            <div class="article-container">
              <article>
                <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Python</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Java</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>C</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>C++</h3>
                </div>
              </article>
            </div>
            <h3 class="experience-sub-title2">Frameworks/Libraries:</h3>
            <div class="article-container">
              <article>
                <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>React</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Spring</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Express.js</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Node.js</h3>
                </div>
              </article>
            </div>
            <h3 class="experience-sub-title2">Database/Tools:</h3>
            <div class="article-container">
              <article>
                <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Git</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Docker</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>Linux</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>MySQL</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp} alt="gh"/>
                <div>
                  <h3>MongoDB</h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
              </div>
            </div>
        </div>
      </div> : null}
    </div>
  );
}

export default App;
