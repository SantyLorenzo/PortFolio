import React from 'react'
import styled from 'styled-components'
import PDF from './images/Resume.pdf'

const Container = styled.section`
  width: 180px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const Link = styled.a`
  color: rgba(255, 255, 255, .26);
  &:hover {
    color: #d54090;
  }
`
const Text = styled.span`
  font-size: 15px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
`
const Media = () => (
  <Container>
    <Text>Download CV:</Text>
    <Link href={PDF} download>
      <i class="fas fa-file-download fa-2x" />
    </Link>
  </Container>
)

export default Media