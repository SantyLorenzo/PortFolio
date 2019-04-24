import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  width: 180px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Link = styled.a`
  color: rgba(255, 255, 255, .26);
  &:hover {
    color: #d54090;
  }
`
const Media = () => (
  <Container>
    <Link href='https://www.linkedin.com/in/santiago-lorenzo/'>
      <i className="fab fa-linkedin fa-2x" />
    </Link>
    <Link href='https://github.com/SantyLorenzo'>
      <i className="fab fa-github fa-2x" />
    </Link>
    <Link href='https://twitter.com/santil0renzo'>
      <i className="fab fa-twitter fa-2x" />
    </Link>
  </Container>
)

export default Media