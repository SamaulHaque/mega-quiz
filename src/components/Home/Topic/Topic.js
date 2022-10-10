import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    console.log(topic)
    const { logo, name, total } = topic;
    return (
        <div className='topic-container'>
               <img src={logo} alt="" />;
            <div className='topic-info-container'>
                <h5>{name}</h5>
                <h5>Total Quiz: {total}</h5>
                <button>Start</button>
            </div>
            
        </div>
    );
};

export default Topic;