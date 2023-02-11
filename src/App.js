







import React from 'react'
import "./App.css"
import About from "./About";
import Contact from "./Contact";
import Home from './Home';
import Services from './Services';


const App = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default App