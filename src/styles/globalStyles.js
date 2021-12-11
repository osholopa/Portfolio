import { css } from '@nfront/global-styles'
import media from './index'

const globalStyles = css`
  ${media.small`
    html {
      font-size: 16px;
    }   
  `}
  ${media.tablet`
    html {
      font-size: 15px;
    }   
  `}
  ${media.mobile`
    html {
      font-size: 14px;
    }   
  `}
  html,body {
    font-family: ${props => props.theme.fontFamily};
    background-color: transparent;
    //position: relative;
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  button {
    font-family: ${props => props.theme.fontFamily};
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    transition-duration: 0.4s;
    border: 1px solid ${props => props.theme.black};
    border-radius: 2px;
    box-shadow: 2px 2px 3px 0px ${props => props.theme.black};
    outline: none;
  }
  body {
    //margin: 0;
    // min-height: 100vh;
  }
  button:hover {
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  a {
    color: ${props => props.theme.accent};
  }
  a > h1:hover {
    color: ${props => props.theme.white};
  }
`

export default globalStyles
