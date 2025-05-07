import { useEffect, useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Quizmain from './Components/Quizmain'
import QuizCard from './Components/QuizCard'
import Root from './Root'

function App() {

  const[apidata,setApidata]=useState([])
  useEffect(() => {
   fetch('https://the-trivia-api.com/v2/questions').
   then((resposnse)=> {return resposnse.json()})
   .then(data => 
    setApidata(data)  
  );
  }, [])
// console.log(JSON.stringify(apidata ))
  const router = createBrowserRouter([
    {path:'/' , element:<Root/>,
      children:[
        {path:'', element:<Home apidata={apidata}/>},
        {path:'/quiz/:id', element:<QuizCard apidata={apidata}/>}
      ]
    }
  ])

  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
