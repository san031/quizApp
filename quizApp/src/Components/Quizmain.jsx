import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import QuizCard from './QuizCard'
function Quizmain() {

    const[apidata,setApidata]=useState([])
  useEffect(() => {
   fetch('https://the-trivia-api.com/v2/questions').
   then((resposnse)=> {return resposnse.json()})
   .then(data => 
    setApidata(data)  
  );
  }, [])

  // useEffect(() => {
  //   console.log(apidata)
  // }, [apidata])
  


  return (
    <div>
      {/* <ul>
        {apidata.map((item,id)=>( */}
         {/* console.log(item.incorrectAnswers[0]) */}
        
        {/* <li  key={id}> */}
          {/* <QuizCard question={item.question} correctAnswer={item.correctAnswer} incorrectAnswers={item.incorrectAnswers}/> */}
          
        {/* </li>
        )
        )}
        </ul> */}
        {/* <QuizCard apidata={apidata}/> */}
        {
          // apidata.map((item) => (
            
          // ))
        }
        {
          
        }
        
    </div>
  )
}

export default Quizmain