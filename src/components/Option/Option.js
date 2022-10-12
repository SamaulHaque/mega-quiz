import React from 'react';
import './Option.css'

const Option = ({option, handleOption}) => {
    console.log(option)
    return (
        
        <label className='option'><input onClick={()=>handleOption(option)} name='nam' type="radio" /> {option}</label>
            
        
    );
};

export default Option;