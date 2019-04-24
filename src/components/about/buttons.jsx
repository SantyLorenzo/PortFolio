import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";

const ButtonsContainer = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled(Link)`
  padding: 12px 25px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  border: none;
  color: ${props => (props.color)};
  background: ${props => (props.background)};
  cursor: pointer;
  letter-spacing: 1px;
  outline:none;
  border-radius: 2px;
  animation-delay: .9s;
  text-decoration: none;
`

const Buttons = () => (
  <ButtonsContainer>
    <Button
      className="animated fadeIn"
      background='rgba(213,64,144,.9)'
      color='white'
      to="/Contact"
    >
      Hire Me
    </Button>
    <Button
      className="animated fadeIn"
      background='rgba(255, 255, 255, .04)'
      color='rgba(255, 255, 255, .7)'
    >
      Know More
    </Button>
  </ButtonsContainer>
)
export default Buttons