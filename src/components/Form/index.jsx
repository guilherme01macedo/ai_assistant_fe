import React, { useState } from 'react';
import './Form.scss';
import Input from './Input';
import { IconButton } from '@mui/material';
import useStringRandomizer from '../../hooks/useStringRandomizer';
import ShuffleIcon from '@mui/icons-material/Shuffle';

function Form(props) {
  const [inputValue, setInputValue] = useState('');
  const { getSearchResult, disabled} = props;
  const { generateRandomString } = useStringRandomizer(setInputValue, getSearchResult);
  

  return (
    <div className='form__container'>
      <IconButton disabled={disabled} onClick={() => {
        generateRandomString();
      }}>
        <ShuffleIcon classes={{ root: disabled ? 'form__icon-disabled' : 'form__icon' }} />
      </IconButton>
      <Input setInputValue={setInputValue} inputValue={inputValue} getSearchResult={getSearchResult} disabled={disabled} />
    </div>
  );
}

export default Form;
