import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import MovieFooter from '../Footer'

function Layout() {
  return (
    <div>
          <Navbar />
          
          <Outlet/>

          <MovieFooter/>
    </div>
  )
}

export default Layout
