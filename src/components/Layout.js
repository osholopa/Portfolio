import * as React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Background from './Background'
import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'

export const Layout = ({ children, footerData }) => (
  <>
    <GlobalStyle theme={theme} />
    <Navigation/>
    {children}
    <Background/>
    <Footer data={footerData} />
  </>
)
