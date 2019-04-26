import React from 'react'
import styled from 'styled-components'
import Media from './media'
import Titles from './titles'
import Perfil from './images/Imagen.png'

const Wrapper = styled.section`
  height: 100vh;
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgb(26,20,46);
  background: linear-gradient(0deg, rgba(26,20,46,1) 70%, rgba(0,0,0,1) 100%, rgba(31,26,26,1) 100%);  @media (max-width: 980px) {
    display: none;
  }
`
const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 170px;
  height: 170px;
`

const SideBar = () => (
  <Wrapper>
    <ImageContainer>
      <Image src={Perfil} alt='Perfil' />
    </ImageContainer>
    <Titles />
    <Media />
  </Wrapper>
)

export default SideBar