import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Home from './Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './Components/Footer'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import { ThemeProvider } from "styled-components";



const App = () => {
  return (
    <ThemeProvider theme={theme}>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/about' element= {<About/>}/>
    <Route path='/contact' element= {<Contact/>}/>
    <Route path='/services' element= {<Services/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </ThemeProvider>

  )
}

export default App