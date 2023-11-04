import React from 'react'
import Navbar from '../components/navbar/Navbar'

function NavbarLayout({children, onClick}) {
  return (
    <>
    <Navbar onClick={onClick}/>
     {children} 
    </>
  )
}

export default NavbarLayout
