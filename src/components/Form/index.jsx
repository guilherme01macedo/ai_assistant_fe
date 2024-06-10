import React from 'react';
import './Form.scss';
import Input from './Input';
import DiceIcon from '@mui/icons-material/Casino';
import { IconButton } from '@mui/material';

function App() {
  return (
    <div className='form__container'>
        <IconButton>
            <DiceIcon classes={{root: 'form__icon'}} />
        </IconButton>
        <Input />
    </div>
  );
}

export default App;
