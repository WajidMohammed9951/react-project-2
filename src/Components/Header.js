import React from 'react';
// import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <div className='title'>WAJID VIEW</div>
   <NavBar/>  
   </MainHeader>
  )
}
const MainHeader = styled.header`

padding:1.5rem 1.5rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.title {
}
`


export default Header