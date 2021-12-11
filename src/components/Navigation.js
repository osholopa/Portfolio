import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from '../styles'
import theme from '../styles/theme'

const NavBar = styled.nav`
  height: 5vh;
  display: flex;
  background-color: #fafafa;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #f5efedff;
  margin: 0 auto;
  padding: 0 2%;
  z-index: 10;
  align-self: center;
  ${media.tablet`
    position: sticky;
    height: 6vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  `}
`

const Logo = styled.h1`
  color: black;
  align-self: center;
  text-decoration: none;
  font-size: 1.5rem;
  :hover {
    background-color: ${theme.black};
    color: ${theme.white};
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  margin-left: auto;
  ${media.tablet`
    display:flex;
  `}
  ${media.mobile`
    display:flex;
    margin-left: auto;
    font-size: 2px;
  `}
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  ${media.tablet`
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fafafa;
    transition: all 0.3s ease-in;
    top: 6vh;
    left: ${props => (props.open ? '-100%' : '0')};
  `}
`
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  ${media.mobile`
    width: 25px;
    height: 2px;
  `}
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    ${media.mobile`
      width: 25px;
      height: 2px;
    `}
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`

const NavLink = styled(Link)`
  margin: 1rem auto;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  :hover {
    background-color: ${theme.black};
    color: ${theme.white};
  }
`

function NavLinks({setMenuOpen}) {
  return (
    <>
      <NavLink onClick={() => setMenuOpen(open => !open)} to="/#portfolio">Portfolio</NavLink>
      <NavLink onClick={() => setMenuOpen(open => !open)} to="/#contact">Contact</NavLink>
    </>
  )
}

export default function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <NavBar>
      <Logo as={Link} to="/">
        osholopa.com
      </Logo>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavLinks setMenuOpen={setNavbarOpen} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavLinks setMenuOpen={setNavbarOpen} />
        </Navbox>
      )}
    </NavBar>
  )
}
