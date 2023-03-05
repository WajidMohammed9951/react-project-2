import React from 'react';
// import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
   <NavBar/>  
   </MainHeader>
  )
}
const MainHeader = styled.header`

padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: flex-end;
align-items: center;
`


export default Header