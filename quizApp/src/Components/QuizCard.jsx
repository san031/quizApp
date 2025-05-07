import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function QuizCard({apidata}) {
  

  const {id} =useParams()
  // let idx=Number(id)
  // console.log(Number(id)+1)
  // apidata.map((item)=> console.log(item.id))
  const index=parseInt(id)
  return (
    <>
    <div>QuizCard : {id}</div>
    {/* console.log({index}) */}
    
    {/* console.log({JSON.stringify(apidata[0].id)}) */}
    {/* console.log({JSON.stringify(apidata.id)}) */}
   { console.log(JSON.stringify(apidata[index]))}
    {/* console.log(apidata[index]?.correctAnswer); */}
    {/* console.log(parseInt(${id})) */}
    {/* parseInt({id}) */}
   {/* console.log({typeof( parseInt(id))}) */}
   {/* {apidata[parseInt(id)]} */}
   <div>
    {JSON.stringify(apidata[index])}
   </div>
   
    <Link to={`/quiz/${parseInt(id)+1}`}>Next Question</Link>

    </>
  )
}

export default QuizCard
// JSON.stringify(apidata[0])

{/* <div>{JSON.stringify(item.question).split('"')[3]}</div>
          <div>{item.correctAnswer}</div>
          <div>{item.incorrectAnswers[0]}</div>
          <div>{item.incorrectAnswers[1]}</div>
          <div>{item.incorrectAnswers[2]}</div> */}