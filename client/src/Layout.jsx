import React from 'react'
import Header from './components/Header'
import Topmenu from './components/Topmenu'
import { Outlet } from 'react-router-dom'
// import Footer from './components/Footer'

const Layout = () => {
  return (
   
    <>
    {/* <h1>Welcome to Layout!!</h1> */}
    <Header/>
    <Topmenu/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Layout