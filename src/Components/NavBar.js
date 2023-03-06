import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const NavBar = () => {

  const Nav = styled.nav`
  .navbar-list{
    display: Flex;
    gap: 3rem;
  }
  li{
    list-style: none;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.5rem;
        // text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
  }

  `
  return (
    <Nav>
    <div className='menuIcon'>
      <ul className='navbar-list'>
        <li>
          <NavLink  className="navbar-link"  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink  className="navbar-link" to="/About">About</NavLink>
        </li>
        <li>
          <NavLink   className="navbar-link" to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink  className="navbar-link" to="/contact">contact</NavLink>
        </li>
      </ul>

    </div>
    </Nav>
  )
}

export default NavBar