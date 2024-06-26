import React, { useState } from 'react';
import './Header.scss';
import headerImg from './header_image.jpg';
import linkedinImg from './linkedin.png';

const Header = (props) => {
  const { reducedLayout } = props
  const [displayText, setDisplayText] = useState('MAIA');

  const handleMouseEnter = () => {
    setDisplayText('MY AI ASSISTANT');
  };

  const handleMouseLeave = () => {
    setDisplayText('MAIA');
  };

  return (
    <div className={reducedLayout ? 'header__reduced-container' : 'header__container'}>
      <div onClick={() => reducedLayout && window.open('https://www.linkedin.com/in/guilherme-macedo-/')} className={reducedLayout ? 'header__image-container header__image-reduced-container' : 'header__image-container'}>
        <img src={headerImg} alt="Header profile pic" />
        {
          !reducedLayout &&
          <img className='header__linkedin-image-container' onClick={() => window.open('https://www.linkedin.com/in/guilherme-macedo-/')} src={linkedinImg} alt="Linkedin logo" />
        }
      </div>
      {!reducedLayout &&
        <h1
          className="header__animated-text"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {displayText}
        </h1>
      }
    </div>
  );
}

export default Header;
