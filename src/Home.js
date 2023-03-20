import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from "./Services"

const Home = () => {
const data = {
  name : "Wajid Mohammed",
  image: "./images/hero.svg",
};
  return (
    <>
    <HeroSection {... data}/>
    <Services/>
    </>
  )
}

export default Home