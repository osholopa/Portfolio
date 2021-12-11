import * as React from 'react'
import styled from 'styled-components'
import media from '../styles'
import theme from '../styles/theme'
import ButtonLink from './ButtonLink'

const StyledHero = styled.section`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  ${media.mobile`
    flex-wrap: wrap;
  `}
  color: ${props => props.textColor};
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${props => props.backgroundUrl});
  background-size: cover;
`

const BannerLinks = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`

export const HomepageBanner = ({
  title,
  description,
  backgroundUrl,
}) => (
  
    <StyledHero textColor={theme.white} backgroundUrl={backgroundUrl}>
      <h2 >{title}</h2>
      <p >{description}</p>
      <BannerLinks>
        <ButtonLink href="/#portfolio" text="Portfolio" />
        <ButtonLink href="/#contact" text="Contact" />
      </BannerLinks>
    </StyledHero>
)