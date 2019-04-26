import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 370px) {
    height: 30px;
  }
`
const Title = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
  border-bottom: ${props => (props.selected ? '1px solid #d54090' : '')};

  ${ItemContainer}:hover & {
    background: rgba(255, 255, 255, .04);
    color: #d54090;
  }
  &:before {
    content: '${props => props.title}';
  }
  @media (max-width: 370px) {
    font-size: 15px;
  }
`

const Item = (props) => (
  <ItemContainer>
    <Title title={props.title} selected={props.selected} />
  </ItemContainer>
)

export default Item