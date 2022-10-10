import Option from '../Option/Option';
import './Question.css'

const Question = ({questions}) => {
   
    const {question, options, correctAnswer}=questions;

    const handleOption= option => {
        if(correctAnswer === option){
            alert('Correct Answer')
        }
        else{
            alert('Wrong Answer')
        }
        
    }
    return (
        <div className='question-container'>
            <h4>Quiz {question}</h4>
            <div className='option-container'>
            {
                options.map((option, index) => <Option
                key={index}
                option={option}
                handleOption={handleOption}
                ></Option>)
            }
            </div>
        </div>
    );
};

export default Question;