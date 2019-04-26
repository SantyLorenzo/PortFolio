import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Container = styled.section`
  width: 100%;
  height: calc(100% - 64px);  
  padding: 64px 64px 0 64px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  overflow-x: hidden;
`
const Title = styled.span`
  width: 145px;
  border-bottom: 2px solid #d54090;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 53px;
`
const ProjectsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const Projects = [
  {
    title: 'Barbers',
    image: 'https://i.imgur.com/Hmkd8ma.png?1',
    description: 'The best barbershop located in the city of San Miguel del Monte.',
    linkToPage: 'https://personalwebsites1.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/BarberShop-website'
  },
  {
    title: 'La Plata Pesos',
    image: 'https://i.imgur.com/OV5vHtb.png',
    description: 'Page made for a financial company that issues loans.',
    linkToPage: 'http://laplatapesos.com.ar/',
    linkToGithub: ''
  },
  {
    title: 'Dissie',
    image: 'https://i.imgur.com/6VP3RzM.png?3',
    description: 'Meet new people all around the world using Disse, a public chat.',
    linkToPage: 'https://dissie-app.firebaseapp.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Dissie'
  },
  {
    title: 'Rick and Morty Images',
    image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/04/02/02-rick-and-morty.w330.h330.JPG',
    description: 'An image searcher consuming rick and morty API.',
    linkToPage: 'https://rick-and-morty-img-search.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Rick-and-Morty-Image-Search'
  },
  {
    title: 'Unsplash Images',
    image: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/65467-4b3e46561abf4c2727186ffb1aec54cf-medium_jpg.jpg?buster=1544713352',
    description: 'An image searcher consuming unsplash API.',
    linkToPage: 'https://unsplash-image-searcher.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Unsplash-Image-Searcher'
  },
  {
    title: 'Old Portfolio',
    image: 'https://i.imgur.com/fwTSU56.png',
    description: 'This is my very first Portfolio',
    linkToPage: 'https://santiagolorenzo.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Old-PortFolio'
  }
]
const Portfolio = () => (
  <Container>
    <Title className="animated fadeInDown">Portfolio</Title>
    <ProjectsContainer>
      {Projects.map(
        (Projects, i) =>
          <Item data={Projects} key={i} />
      )}
    </ProjectsContainer>
  </Container>
)
export default Portfolio