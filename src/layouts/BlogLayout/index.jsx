import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header'

const BlogLayout = () => {
  return (
      <div>
     <Header className="container" />
        <Outlet/>
      <Footer className="container" /> 
    </div>
  )
}

export default BlogLayout
