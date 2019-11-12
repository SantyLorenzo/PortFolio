import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 64px;
  align-self: center;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    height: 400px;
  }
`
const Icon = styled.a`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #524f5c;
  animation-delay: .5s;
  animation-duration: 3s;
  cursor: pointer;
  text-decoration: none;
  color:  #524f5c;
  
  &:hover {
    color: #d54090;
    border: 1px solid #d54090;
  }
`

const Icons = () => (
  <Container>
    <Icon className='animated fadeIn' href='https://www.linkedin.com/in/santiago-lorenzo/'>
      <i className="fab fa-linkedin-in fa-3x" />
    </Icon>
    <Icon className='animated fadeIn' href='https://join.skype.com/invite/uid5et1zodT7'>
      <i className="fab fa-skype fa-3x" />
    </Icon>
  </Container >
)

export default Icons