import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  width: 380px;
  height: 420px;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  margin: 20px;
  animation-delay: .3s;
  animation-duration: 4s;
  border-radius: 3px;
`
const Image = styled.div`
  width: 100%;
  height: 270px;
  background: url(${props => (props.background)});
  background-position: center;
  background-size: cover;
  border-radius: 2px;
`
const Information = styled.div`
  width: 100%;
  height: 150px;
  dislpay: flex;
  flex-direction: column;
  background: #1e1a34;
  border-radius: 0 0 3px 3px;
`
const Title = styled.h2`
  font-size: 18px;
  color: white;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 20px 20px;

  &:before {
    content: '${props => props.title}';
  }
`
const Description = styled.p`
  height: 45px;
  font-size: 12px;
  color: rgba(255, 255, 255, .4);
  font-weight: 300;
  letter-spacing: 1px;
  margin: 0 20px 10px 20px;

  &:before {
    content: '${props => props.text}';
  }
`
const LinksContainer = styled.div`
  width: 200px;
  height: 25px;
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Link = styled.a`
  color: #d54090;
  font-size: 16px;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
`

const Item = (props) => (
  <ItemContainer className="animated fadeIn">
    <Image background={props.data.image} />
    <Information>
      <Title title={props.data.title} />
      <Description text={props.data.description} />
      <LinksContainer>
        <Link href={props.data.linkToPage} >
          website <i className="fas fa-angle-right" />
        </Link>
        <Link href={props.data.linkToGithub} >
          code <i className="fas fa-angle-right" />
        </Link>
      </LinksContainer>
    </Information>
  </ItemContainer>
)

export default Item