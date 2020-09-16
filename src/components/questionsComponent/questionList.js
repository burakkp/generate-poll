import React from 'react';
import { useQuestions } from './questions';
import Question from './question';

export default function QuestionList() {
  
  const { questions } = useQuestions();
  
  return (
    <>
      <ul>
        {
          questions.map((question, i) => 
            <Question key={i} {...question} />
          )
        }
      </ul>
    </>
  )
}