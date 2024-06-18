import React from 'react';
import './Input.scss';
import SearchIcon from '@mui/icons-material/Search';

const CustomInput = (props) => {
  const { getSearchResult, disabled, setInputValue, inputValue } = props;

  const validateAndSearch = () => {
    const finalInput=inputValue.trim()
    if (finalInput.length>0)
      getSearchResult(finalInput)
  };

  const handleKeyDown = (e) => {
    if(e.key === "NumpadEnter" || e.key ==="Enter")
      validateAndSearch()
  };

  return (
    <div className="input__container">
      <input
        onKeyDown={handleKeyDown}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        disabled={disabled}
        type="text"
        className="input_custom-input"
        placeholder="Ask me something about me or my career!"
      />
      <button disabled={disabled} className={`input__icon-button ${disabled && 'input__icon-button-disabled'}`} onClick={() => validateAndSearch()}>
        <SearchIcon classes={{root: 'input__icon-container'}} />
      </button>
    </div>
  );
};

export default CustomInput;