import React from 'react';
import styled from 'styled-components'
import SideBar from '../sideBar/SideBar'
import About from '../about/About'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

import { BrowserRouter, Route } from "react-router-dom";

//media query, si baja de cierta medida, agreaga flex-direction: column;
//que a SideBar le de Display: none y a UpBar le de display: flex;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background: linear-gradient(0deg, rgba(21,17,35,1) 70%, rgba(0,0,0,1) 100%, rgba(31,26,26,1) 100%);
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
