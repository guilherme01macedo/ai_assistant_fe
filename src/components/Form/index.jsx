import React, { useState } from 'react';
import './Form.scss';
import Input from './Input';
import DiceIcon from '@mui/icons-material/Casino';
import { IconButton } from '@mui/material';
import useStringRandomizer from '../../hooks/useStringRandomizer';

function App(props) {
  const [inputValue, setInputValue] = useState('');
  const { getSearchResult, disabled, resetData, data} = props;
  const { generateRandomString } = useStringRandomizer(setInputValue);
  
  const setInputValueAndClearSearch = (e) => {
    if(data)
      resetData()
    setInputValue(e)
  };

  return (
    <div className='form__container'>
      <IconButton disabled={disabled} onClick={() => {
        resetData();
        generateRandomString();
      }}>
        <DiceIcon classes={{ root: disabled ? 'form__icon-disabled' : 'form__icon' }} />
      </IconButton>
      <Input setInputValue={setInputValueAndClearSearch} inputValue={inputValue} getSearchResult={getSearchResult} disabled={disabled} />
    </div>
  );
}

export default App;
