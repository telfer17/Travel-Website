import React from 'react'
import Dropdown from './Dropdown'
import Footer from './Footer'
import Header from './Header'
import { GlobalStyle } from './styles/GlobalStyles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Dropdown />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
