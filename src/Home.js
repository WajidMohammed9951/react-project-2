import React from 'react'
import HeroSection from './Components/HeroSection'

const Home = () => {
const data = {
  name : "Wajid Mohammed",
  image: "./images/hero.svg",
};
  return (
    <HeroSection {... data}/>
  )
}

export default Home