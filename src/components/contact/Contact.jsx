import React from 'react'
import styled from 'styled-components'

import Icons from './icons'

const Container = styled.section`
  width: 100%;
  height: calc(100% - 64px);
  padding: 64px 64px 0 64px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.span`
  width: 135px;
  border-bottom: 2px solid #d54090;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 53px;
`
const TextContainer = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Phone = styled.h2`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 40px;
  letter-spacing: 10px;
  color: rgba(255, 255, 255, .26);
  font-weight: 300;
  font-style: italic;
  margin: 0;
  animation-delay: .5s;
  animation-duration: 3s;
`
const Mail = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 50px;
  margin: 0;
  letter-spacing: 8px;
  color: #d54090;
  animation-delay: .3s;
  animation-duration: 3s;
`

const Contact = () => (
  <Container>
    <Title className="animated fadeInDown">Contact</Title>
    <TextContainer>
      <Phone className='animated fadeIn'>+54 221 - 3642233</Phone>
      <Mail className='animated fadeIn'>SANTYLORE4@GMAIL.COM</Mail>
    </TextContainer>
    <Icons />
  </Container>
)
export default Contact