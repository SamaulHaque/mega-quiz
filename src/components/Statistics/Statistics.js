import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Statistics = () => {
    const allQuiz= useLoaderData();
    const quizData=allQuiz.data;

    const names=quizData.map(quiz => quiz.name)
    
    for(const name of names)
    console.log(names)
    
    const totals=quizData.map(quiz => quiz.total)
    for(const total of totals)
    console.log(total)
    return (
        <div>
            {
                
            }
        </div>
    );
};

export default Statistics;