import React from 'react';
import QuestionComponent from '../questionsComponent/questionComponent';
import Vote from '../voteComponent/vote';
import Result from '../resultComponent/result';
import { useQuestions } from '../questionsComponent/questions';
import './layout.scss'

function Layout (){
    const { questions, qTitle, submitVote } = useQuestions();
    let questionTitle = qTitle;



    return <div className="main-container">
        <QuestionComponent/>
        <div className="vote-wrapper">
            <h3>{questionTitle}</h3>
                {
                questions.map((question, i) => 
                    <Vote key={i} {...question} />
                )
                }
            <div className="vote-btn"> 
                {questions.length >= 2 ?
                    <button id="voteBtn" onClick={submitVote}>Vote</button>
                : ''
                }
            </div>        
        </div>
        <Result/>
    </div>
}

export default Layout;