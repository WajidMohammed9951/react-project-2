import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Styles/Button'

const Error = () => {
  return (
    <Wrapper className='section'>
  <img src="../images/error.vg/error.jpg" alt="error"  className='image-error'/>
 <NavLink to="/">
  <Button className='btn'>go back</Button>
  </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:0rem;

.btn {
  font-size: 1.8rem;
  margin-top: 3rem;
}
.image-error{
max-width:50%;
margin-top:0rem;

}

`

export default Error