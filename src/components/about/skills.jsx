import React from 'react'
import styled from 'styled-components'

const SkillsContainer = styled.div`
  width: 700px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  animation-delay: 1s;

  @media (max-width: 700px) {
    display: none;
  }
`

const IconsContainer = styled.div`
  height: 30px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: rgba(255, 255, 255, .4);
`
const Icon = styled.div`
  &:hover {
    color: #d54090;
  }
`
const Title = styled.span`
  font-size: 25px;
  color: #d54090;
  font-weight: 500;
  animation-delay: .5s;
`

const Skills = () => (
  <SkillsContainer className="animated fadeIn">
    <Title>Skills :</Title>
    <IconsContainer>
      <Icon>
        <i className="fab fa-html5 fa-2x" />
      </Icon>
      <Icon>
        <i className="fab fa-css3-alt fa-2x" />
      </Icon>
      <Icon>
        <i className="fab fa-sass fa-2x" />
      </Icon>
      <Icon>
        <i className="fab fa-js-square fa-2x" />
      </Icon>
      <Icon>
        <i className="fab fa-git fa-2x" />
      </Icon>
      <Icon>
        <i className="fab fa-react fa-2x" />
      </Icon>
      <Icon>
        <i className="fab fa-npm fa-2x" />
      </Icon>
    </IconsContainer>
  </SkillsContainer>
)

export default Skills