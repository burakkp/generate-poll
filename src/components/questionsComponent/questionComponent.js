import React from 'react';
import NewQuestion from '../questionsComponent/newQuestion';
import QuestionList from './questionList';
import { useQuestions } from './questions';


function QuestionComponent() {

    const { questions, resetQuestionList } = useQuestions();

    
    return <>
        <div className="questions-wrapper">
            <NewQuestion/>
            <QuestionList/>
            <span>{questions.length} / 10 possible answers</span> <button id="resetBtn" onClick={resetQuestionList}>Reset</button>
        </div>
    </>
}

export default QuestionComponent;