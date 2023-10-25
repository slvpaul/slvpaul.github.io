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
          {changeProject === 0 ? <div className='proj-container2'>
            <div className='proj-container3'>
              <img src={gh} alt="Project 1" className='project-img'/>
            </div>
            <h2 className='project-title'>SMS Spam detection</h2>
            <p className='proj-description'>Lorem ipsum lorem ipsum lorem ipsum</p>
            <div className='proj-btn-container'>
              <button className='project-btn'>Github</button>
              <button className='project-btn'>Live Demo</button>
            </div>
          </div> : null}
          {changeProject === 1 ? <div className='proj-container2'>
            <div className='proj-container3'>
              <img src={gh} alt="Project 1" className='project-img'/>
            </div>
            <h2 className='project-title'>Delivery simulator</h2>
            <p className='proj-description'>Lorem ipsum lorem ipsum lorem ipsum</p>
            <div className='proj-btn-container'>
              <button className='project-btn'>Github</button>
              <button className='project-btn'>Live Demo</button>
            </div>
          </div> : null}
          {changeProject === 2 ? <div className='proj-container2'>
            <div className='proj-container3'>
              <img src={tct} alt="Project 1" className='project-img'/>
            </div>
            <h2 className='project-title'>Tic Tac Toe</h2>
            <p className='proj-description'>Lorem ipsum lorem ipsum lorem ipsum</p>
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
            <h2 class="experience-sub-title">Skills</h2>
            <div class="article-container">
              <article>
                <img className='icon' src={exp}/>
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp}/>
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp}/>
                <div>
                  <h3>SASS</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp}/>
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp}/>
                <div>
                  <h3>TypeScript</h3>
                </div>
              </article>
              <article>
              <img className='icon' src={exp}/>
                <div>
                  <h3>Material UI</h3>
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
