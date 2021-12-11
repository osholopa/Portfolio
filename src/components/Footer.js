import React from 'react'
import styled from 'styled-components'
import media from '../styles'
import ButtonLink from './ButtonLink'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import './Footer.css'
import { graphql, useStaticQuery } from 'gatsby'

const StyledFooter = styled.footer`
  width: 100%;
  bottom: 0;
  position: ${props =>
    props.position === 'absolute' ? 'absolute' : 'inherit'};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #2f2f33;
  color: #f5efedff;
  font-size: 0.8rem;
  ${media.small`
    padding: 0.375rem;
  `}
  ${media.tablet`
    padding: 0;
  `}
  ${media.mobile`
    padding: 0;
  `}
`

const SomeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default function Footer({ position }) {

  const data = useStaticQuery(graphql`
    {
      prismicFooter {
        data {
          copyright {
            text
          }
          github_link {
            url
          }
          linkedin_link {
            url
          }
          mailto_link {
            url
          }
        }
      }
    }
  `)

  if(!data) return null

  return (
    <StyledFooter id="contact" position={position}>
      <SomeIcons>
        <ButtonLink
          className="some-btn"
          startIcon={<AiFillGithub />}
          external
          href={data.github_link.url}
        />
        <ButtonLink
          className="some-btn"
          startIcon={<AiFillLinkedin />}
          external
          href={data.linkedin_link.url}
        />
        <ButtonLink
          className="some-btn"
          startIcon={<SiGmail />}
          external
          href={data.mailto_link.url}
        />
      </SomeIcons>
      <p>{data.copyright.text}</p>
    </StyledFooter>
  )
}