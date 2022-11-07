import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header'
import LiveScoreHeader from '../Header/LiveScoreHeader'

const BlogLayout = () => {
  const isindex = useLocation().pathname
  console.log(isindex)
  return (
    <div>
      {!isindex.match('/blog') ?
        <LiveScoreHeader className="container" /> :
        <Header className="container" />

      }
      <Outlet />
      {isindex.match('/blog') && <Footer className="container" />}
    </div>
  )
}

export default BlogLayout
