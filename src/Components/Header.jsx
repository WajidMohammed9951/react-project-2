import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <Header>
       <NavLink to = "/">
        <img src="./Images/logo192.png" alt="logo" />
       
       </NavLink>
       <NavBar/>
    </Header>
  )
}

export default Header