import React from 'react';
import './vote.scss';
import { useQuestions } from '../questionsComponent/questions';

const Vote = ({ id, question }) => {
  
  
  const { takeVote } = useQuestions();

  const handleSelectedQ = e => {

    console.log(e.target.value)
    if(e.target.value !== null)
      takeVote(e.target.value)
  }

  

  return ( 
    <div>
        <div key={'Q_'+id} className="vote-option">
          <input id={'Q_'+id} onChange={handleSelectedQ} value={question} name="vote" type="radio"/>
          <label htmlFor={'Q_'+id}>{question}</label>
        </div>
    </div>
  )
}



export default Vote;