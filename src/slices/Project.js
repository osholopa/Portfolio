import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import media from '../styles'

const ProjectCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.imageSide === 'left' ? 'row' : 'row-reverse'};
  ${media.mobile`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`
const CardImg = styled.img`
  width: 50%;
  height: 300px;
  object-fit: cover;
  object-position: top;
  ${media.mobile`
    width: 100%;
  `}
`

const Button = styled.button`
  margin: 5px;
  padding: 6px;
  background-color: #fbfbfb;
`
const CardContent = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  ${media.tablet`
    max-width: 80vw;
  `};
  ${media.mobile`
    width: 80%;
    max-width: 80vw;
  `};
`

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const LinkContainer = styled.div`
  display: flex;
  max-width: 20vw;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  ${media.mobile`
    max-width: 80vw;
    flex-direction: row;
  `};
  ${media.tablet`
    max-width: 80vw;
    flex-direction: row;
  `};
`

const TechIcon = styled.img`
  margin-left: 4px;
  margin-right: 4px;
`

export const Project = ({ slice }) => {
  return(
  <section style={{ width: '100%' }}>
    <ProjectCard imageSide={slice.primary.image_side}>
      <CardImg src={slice.primary.image.url} alt="" />
      <CardContent>
        <h2>{slice.primary.title.text}</h2>
        <p>{slice.primary.description.text}</p>
        <LinkContainer>
            {slice.primary.source_url.url &&
              <a
                key={slice.primary.source_url.url}
                target="_blank"
                rel="noopener noreferrer"
                href={slice.primary.source_url.url}
              >
                <Button className="btn">Source</Button>
              </a>
            }
            {slice.primary.source_url_2.url &&
              <a
                key={slice.primary.source_url_2.url}
                target="_blank"
                rel="noopener noreferrer"
                href={slice.primary.source_url_2.url}
              >
                <Button className="btn">Source 2</Button>
              </a>
            }
            {slice.primary.demo_url.url &&
              <a
                key={slice.primary.demo_url.url}
                target="_blank"
                rel="noopener noreferrer"
                href={slice.primary.demo_url.url}
              >
                <Button className="btn">Demo</Button>
              </a>
            }
          </LinkContainer>
          <TechContainer>
            {slice.items.map((tech,index) => {
              return (
                <TechIcon key={index} src={tech.optional_icon.url} alt=""/>
              )
            })}
          </TechContainer>
      </CardContent>
    </ProjectCard>
  </section>
)}

export const query = graphql`
  fragment HomepageDataBodyAlternateGrid on PrismicHomepageDataBodyAlternateGrid {
    primary {
      source_url {
        url
      }
      source_url_2 {
        url
      }
      demo_url {
        url
      }
      description {
        text
      }
      image_side
      image {
        url
      }
      title {
        text
      }
    }
    items {
      optional_icon {
        url
      }
    }
  }
`