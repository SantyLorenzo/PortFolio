import React from 'react'
import styled from 'styled-components'
import Item from './item'

import { Link, withRouter } from "react-router-dom";

const Wrapper = styled.section`
  width: 700px;
  height: 100px;
  color: white;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 980px) {
    justify-content: space-evenly;
    display: flex;
  }
  @media (max-width: 550px) {
    justify-content: center;
    display: flex;
  }
`
const Container = styled(Link)`
  width: 100%;
  text-decoration: none;

  @media (max-width: 980px) {
    width: 120px;
  }
  @media (max-width: 370px) {
    width: 100px;
  }
`

const UpBar = (props) => {
  const { pathname } = props.location
  return (
    <Wrapper>
      <Container to="/">
        <Item
          title='About'
          selected={pathname === '/' ? true : false}
        />
      </Container>
      <Container to="/Portfolio">
        <Item
          title='Portfolio'
          selected={pathname === '/Portfolio' ? true : false}
        />
      </Container>
      <Container to="/Contact">
        <Item
          title='Contact'
          selected={pathname === '/Contact' ? true : false}
        />
      </Container>
    </Wrapper>
  )
}
export default withRouter(UpBar)