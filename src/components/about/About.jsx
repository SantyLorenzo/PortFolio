import React from 'react'
import styled from 'styled-components'

import Skills from './skills'
import Buttons from './buttons'

const Container = styled.section`
  width: 100%;
  height: calc(100% - 64px);
  padding: 64px 64px 0 64px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  border-bottom: 2px solid #d54090;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 1px;
  width: 105px
`
const Name = styled.h1`
  font-size: 64px;
  font-weight: 300;
  margin-bottom: 20px;
  animation-delay: .3s;
  animation-duration: 3s;
`
const Subtitle = styled.span`
  font-size: 25px;
  color: #d54090;
  font-weight: 500;
  animation-delay: .5s;
`
const Text = styled.p`
  margin: 30px 0;
  width: 700px;
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  color: rgba(255, 255, 255, .35);
  animation-delay: .7s;
`

const About = () => (
  <Container>
    <Title className="animated fadeInDown">About</Title>
    <Name className="animated fadeIn">Santiago Lorenzo</Name>
    <Subtitle className="animated fadeIn">Frontend Web Developer</Subtitle>
    <Text className="animated fadeIn">
      I'm a self taught developer. I enjoy to be always learning new things,
      increasing my knowledge and building new and challenging projects. Also
      love to code in React.
    </Text>
    <Buttons />
    <Skills />
  </Container>
)
export default About

