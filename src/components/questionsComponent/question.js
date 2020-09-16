import React from 'react';
import { useQuestions } from './questions';

export default function Question({ id, question }) {
  
  const { removeQuestion, updateQuestions } = useQuestions();

  

  const remove = e => {
    e.preventDefault();
    
    removeQuestion(id,question);
  }

  let changedInput = [];
  
  const handleChange = e => {
    e.preventDefault(); 

    changedInput.push({
      id,
      question:e.target.value
    })
    
    updateQuestions(id,e.target.value);
   }

  return (
    <>
    
        <li><span className="question"><input type="text" placeholder={question} id={id} maxLength="80" onChange={handleChange} /></span><button onClick={remove}> x</button></li>
      
    </>
  )
}