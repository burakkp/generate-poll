import React, {createContext, useState, useContext} from 'react'
import './questions.scss';

const QuestionContext = createContext()
export const useQuestions = () => useContext(QuestionContext)

export default function QuestionProvider({ children }) {

    const [questions, setQuestions] = useState([]);
    const [qTitle, setQTitle] = useState('');
    const [takedVotes, setTakedVote] = useState([]);
    const [votes, setVote] = useState([]);
  
    const addQuestionTitle = qTitle =>
        setQTitle([
            ...qTitle
        ]);
        
    const addQuestion = (id, question) =>

      setQuestions([
          ...questions,
          { 
              id,
              question
          }
      ])

    const removeQuestion = (id, question) => {
        
        let removed = questions.filter((questionArr) => {
                
                if(questionArr.id !== id) return questionArr;

                    return null
            });
            
            setQuestions(removed);
            
    };

    
    const updateQuestions = (id, change) => {
        
           
        if(change.length > 0){
            questions.filter((questionArr) => {
            
                if(questionArr.id === id){
                    
                    questions[id].question = change;

                }

                return null
    
            })
        }
        
        
    }
  
    const resetQuestionList = () =>{
        setQuestions([]);
        setVote([]);
    }
    
    const takeVote = (takedVote) => {
        
        setTakedVote(takedVote)

    }

    const submitVote = () => {
        
        setVote([
            ...votes,
            takedVotes
        ])    
        
    }
    
  return (
      <QuestionContext.Provider value={{ votes, questions, qTitle, addQuestionTitle, addQuestion, removeQuestion, updateQuestions, resetQuestionList, submitVote, takeVote }}>
          { children }
      </QuestionContext.Provider>
  )
}