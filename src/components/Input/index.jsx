// MyInput.js
import React from 'react';
import TextField from '@mui/material/TextField';
import './Input.scss';

const MyInput = (props) => {
    return (
        <TextField
            classes={{root: "input__container"}}
            label="Enter your text"
            aria-label="search-input" 
            variant="outlined"
            multiline
        />
    );
};

export default MyInput;
