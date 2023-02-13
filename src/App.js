import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Home from './Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/about' element= {<About/>}/>
    <Route path='/contact' element= {<Contact/>}/>
    <Route path='/services' element= {<Services/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App