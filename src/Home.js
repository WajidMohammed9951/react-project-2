import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from "./Services"
import Contact from "./Contact"
import About from "./About"

const Home = () => {
const data = {
  name : "Wajid Mohammed",
  image: "./images/hero.svg",
};
  return (
    <>
    <HeroSection {... data}/>
    <Services/>
    <About/>
    <Contact/>
    </>
  )
}

export default Home