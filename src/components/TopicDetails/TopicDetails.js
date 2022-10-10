import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicDetails = () => {
    const topicDetails = useLoaderData();
    const {name, questions}=topicDetails.data
    
    return (
        <div>
            <h3>Quiz of {name}</h3>
            {
                questions.map(question => <Question
                key={question.id}
                questions={question}
                ></Question>)
            }
        </div>
    );
};

export default TopicDetails;