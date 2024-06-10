import React from 'react';
import './Input.scss';
import SearchIcon from '@mui/icons-material/Search';

const CustomInput = () => {
  return (
    <div className="input__container">
      <input type="text" className="input_custom-input" placeholder="Ask me something!"/>
      <button className="input__icon-button" onClick={() => console.log('search clicked!')}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default CustomInput;