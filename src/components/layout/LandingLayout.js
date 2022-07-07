import React from 'react'
import Header from './../general/Header'
import Footer from './../general/Footer'

export default function LandingLayout({ children, type }) {
  return (
    <>
      <Header type={type} />
			{children}
      <Footer />
    </>
  )
}
