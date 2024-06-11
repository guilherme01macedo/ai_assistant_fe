import React, { useState } from 'react';
import './Form.scss';
import Input from './Input';
import DiceIcon from '@mui/icons-material/Casino';
import { IconButton } from '@mui/material';

function App(props) {
  const [inputValue, setInputValue] = useState('');
  const {getSearchResult, disabled} = props;

  return (
    <div className='form__container'>
        <IconButton disabled={disabled}>
            <DiceIcon setInputValue={setInputValue} classes={{root: disabled? 'form__icon-disabled':'form__icon'}} />
        </IconButton>
        <Input setInputValue={setInputValue} inputValue={inputValue} getSearchResult={getSearchResult} disabled={disabled}/>
    </div>
  );
}

export default App;
