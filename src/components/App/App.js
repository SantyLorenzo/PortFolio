import React from 'react';
import styled from 'styled-components'
import SideBar from '../sideBar/SideBar'
import About from '../about/About'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

import { BrowserRouter, Route } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background: rgb(21,17,35);
` 

const App = () =>(
  <Wrapper className="App">
    <BrowserRouter>
      <SideBar />
      <Route path="/" exact component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
    </BrowserRouter>
  </Wrapper>
)

export default App;
