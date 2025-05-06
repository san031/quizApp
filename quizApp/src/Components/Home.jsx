import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Home({apidata}) {
  // const[apidata,setApidata]=useState([])
    //  useEffect(() => {
    //   fetch('https://the-trivia-api.com/v2/questions').
    //   then((resposnse)=> {return resposnse.json()})
    //   .then(data => 
    //    setApidata(data)  
    //  );
    //  }, [])
    // console.log({apidata})
    useEffect(() => {
      console.log(apidata)
    },[apidata])
  return (
    <>
    <div>Home
     
    </div>
   
   

    <Link to={'./quiz/1'} className='h-6 w-15 border-0 shadow'>Start Quiz</Link>
    </>
  )
}

export default Home