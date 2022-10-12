import { toast } from 'react-toastify';
import Option from '../Option/Option';
import './Question.css';



const Question = ({questions}) => {
   
    const {question, options, correctAnswer}=questions;

    const handleOption= option => {
        if(correctAnswer === option){
            // alert('Correct Answer')
            toast.success('Correct Answer', {autoClose: 500})
        }
        else{
            // alert('Wrong Answer')
            toast.error('Wrong Answer', {autoClose: 500})
        }  
    }

    const handleEyeAns=()=>{
        // alert(`Correct Answer: ${correctAnswer}`)
        toast.info(`Correct Answer: ${correctAnswer} `, {autoClose: 700})
    }
    return (
        <div className='question-container'>
            <div className='question-eye-icon'>
            <h4>Quiz {question}</h4>
            <i onClick={()=>handleEyeAns()} class="fa-solid fa-eye"></i>
            </div>
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