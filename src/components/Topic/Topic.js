import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const {id, logo, name, total } = topic;
    
    return (
        <div className='topic-container'>
               <img src={logo} alt="" />;
            <div className='topic-info-container'>
                <h5>{name}</h5>
                <h5>Quiz: {total}</h5>
                <Link to={`/home/${id}`}>
                <button className='start-btn'>Start Quiz</button>
                </Link>
            </div>
            
        </div>
    );
};

export default Topic;