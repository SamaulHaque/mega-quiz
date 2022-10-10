import React from 'react';
import './Option.css'

const Option = ({option, handleOption}) => {
    return (
        <div className='option'>
            <div onClick={()=>handleOption(option)}>
            <input type="radio" name="ot" id="op" />
            <label htmlFor="op" >{option}</label>
            </div>
        </div>
    );
};

export default Option;