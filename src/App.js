import './App.css';
import { React, useState } from 'react';
import photo from './photo.jpg';
import gh from './github.png';
import ln from './linkedin.png';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="App">
      <div className="Nav" id="desktop-nav">
        <div className="logo">Paulo Silva</div>
        <div className="Button-container">
          <div className="Button">Portfolio</div>
          <div className="Button">About</div>
          <div className="Button">Contact</div>
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
                <div>Portfolio</div>
                <div>About</div>
                <div>Contact</div>
               </div> : null}
      </div>
      <div className="profile">
        <div className='photo-container'>
          <img src={photo} />
        </div>
        <div className="text-container">
          <p className="text1">Hello, I'm</p>
          <h1 className= "text2">Paulo Silva</h1>
          <p className="text3">Software Developer</p>
        </div>
        <div className='social-container'>
          <img src={ln}/>
          <img src={gh}/>
        </div>
      </div>
    </div>
  );
}

export default App;
