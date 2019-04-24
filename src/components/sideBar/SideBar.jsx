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
  background: rgba(21,17,40, .95);
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