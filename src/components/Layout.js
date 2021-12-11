import * as React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Background from './Background'

export const Layout = ({ children, footerData }) => (
  <>
    <Navigation/>
    {children}
    <Background/>
    <Footer data={footerData} />
  </>
)