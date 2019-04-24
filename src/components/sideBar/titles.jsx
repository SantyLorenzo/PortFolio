import React from 'react'
import styled from 'styled-components'
import Item from './item'

import { Link, withRouter } from "react-router-dom";

const Wrapper = styled.section`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const Container = styled(Link)`
  width: 100%;
  text-decoration: none;
`

const SideBar = (props) => {
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

export default withRouter(SideBar)
