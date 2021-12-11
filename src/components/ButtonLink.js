import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../styles'

const Button = styled.button`
  margin: 0.1rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  ${media.small`
    font-size: 1.2rem;
  `}
  ${media.tablet`
    font-size: 1rem;
  `}
  ${media.mobile`
    font-size: 0.8rem;
  `}
`

const ButtonLink = ({
  href,
  text,
  className,
  startIcon,
  endIcon,
  external
}) => {
  if (external)
    return (
      <a style={{ hover: 'none', textDecoration: 'none' }} href={href}>
        <Button className={className ? [className, 'btn'].join(' ') : 'btn'}>
          {startIcon}
          {text}
          {endIcon}
        </Button>
      </a>
    )
  return (
    <Link style={{ hover: 'none', textDecoration: 'none' }} to={href}>
      <Button className={className ? [className, 'btn'].join(' ') : 'btn'}>
        {startIcon}
        {text}
        {endIcon}
      </Button>
    </Link>
  )
}

export default ButtonLink