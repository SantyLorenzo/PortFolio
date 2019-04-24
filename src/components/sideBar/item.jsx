import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SelectedItem = styled.div`
  width: 8px;
  height: 100%;
  background: ${props => (props.selected ? '#d54090' : '')};
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
  justify-content: flex-start;
  padding-left: 40px;
  letter-spacing: 2px;

  ${ItemContainer}:hover & {
    background: rgba(255, 255, 255, .04);
    color: #d54090;
  }
  &:before {
    content: '${props => props.title}';
  }
`

const Item = (props) => (
  <ItemContainer>
    <SelectedItem selected={props.selected} />
    <Title title={props.title} />
  </ItemContainer>
)

export default Item