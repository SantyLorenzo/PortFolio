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
  align-items: center;

  @media (max-width: 1000px) {
    padding: 64px 8px 0 8px;
  }
`
const Section = styled.span`
  height: 40px;
  border-bottom: 2px solid #d54090;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 1px;
  width: 105px;
  
  @media (max-width: 980px) {
    display: none;
  }
`
const Name = styled.h1`
  height: 15%;
  font-size: 64px;
  font-weight: 300;
  margin-bottom: 20px;
  animation-delay: .3s;
  animation-duration: 3s;
  text-align: center;

  @media (max-width: 580px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
`
const Subtitle = styled.span`
  height: 5%;
  font-size: 25px;
  color: #d54090;
  font-weight: 500;
  animation-delay: .5s;
  text-align: center;

  @media (max-width: 580px) {
    font-size: 20px;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`
const Text = styled.p`
  margin: 30px 0;
  width: 80%;
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  color: rgba(255, 255, 255, .35);
  animation-delay: .7s;
  text-align: center;

  @media (max-width: 560px) {
    font-size: 12px;
    width: 50%;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    width: 30%;
  }
`
const Wrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-height: 700px) {
    justify-content: space-evenly;
  }
`

const About = () => (
  <Container>
    <Section className="animated fadeInDown">About</Section>
    <Name className="animated fadeIn">Santiago Lorenzo</Name>
    <Subtitle className="animated fadeIn">Frontend Web Developer</Subtitle>
    <Wrapper>
      <Text className="animated fadeIn">
        I'm a self taught developer. I enjoy to be always learning new things,
        increasing my knowledge and building new and challenging projects. Also
        love to code in React.
      </Text>
      <Buttons />
      <Skills />
    </Wrapper>
  </Container>
)
export default About

