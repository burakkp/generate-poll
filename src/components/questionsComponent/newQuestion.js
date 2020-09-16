import React, { useEffect, useState } from 'react';
import { useQuestions } from './questions';

export default function NewQuestion() {
  
  const [qCount, setQCount] = useState(0);
  const [titleTypeLimit, setTitleTypeLimit] = useState(false);
  const [qTypeLimit, setQTypeLimit] = useState(false);
  const [question, setQuestion] = useState('');
  const [qTitle, setQTitle] = useState('');
  const { addQuestion, addQuestionTitle, questions } = useQuestions();

  
  const submit = e => {
    e.preventDefault();
    addQuestion(qCount,question);
    setQCount(qCount+1);
    setQuestion('');
  }

  const handleTitleChange = e => {
    e.preventDefault(); 
    setQTitle(e.target.value);
    addQuestionTitle(e.target.value);
    if(e.target.value.length >= 80){

      setTitleTypeLimit(true);

    }
  }

  const handleQChange = e => {
    e.preventDefault();
    setQuestion(e.target.value);

    if(e.target.value.length >= 80){

      setQTypeLimit(true);

    }
  }

  useEffect(() => {
    document.getElementById('resetBtn').addEventListener('click', function(){
      setTitleTypeLimit(false);
      setQTypeLimit(false);
      setQTitle([]);
      setQuestion([]);
    });
  })

  return (
    <>
      <div className="q-enter-wrapper">
        <input type="text" value={qTitle} onChange={handleTitleChange} maxLength="80" disabled={titleTypeLimit} placeholder="Type a question title..."/>
        <br />
        <input type="text" value={question} placeholder="Type an answer..." maxLength="80" disabled={qTypeLimit} onChange={handleQChange} required />        
        <button onClick={submit} disabled={questions.length >= 10}>Add</button>
      </div>
    </>
    
  )
}