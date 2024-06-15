import React, { useState } from 'react';
import './Header.scss';
import headerImg from './header_image.jpg';
import linkedinImg from './linkedin.png';

const Header = () => {
  const [displayText, setDisplayText] = useState('MAIA');

  const handleMouseEnter = () => {
    setDisplayText('MY AI ASSISTANT');
  };

  const handleMouseLeave = () => {
    setDisplayText('MAIA');
  };

  return (
    <div className="header__container">
        <div class="header__image-container">
          <img src={headerImg} alt="Header profile pic" />
          <img className='header__linkedin-image-container' src={linkedinImg} alt="Linkedin logo" />
        </div>
      <h1
        className="header__animated-text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {displayText}
      </h1>
    </div>
  );
}

export default Header;
