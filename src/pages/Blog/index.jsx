import React from 'react'
import BlogCards from '../../components/BlogCards'
import Categories from './components/Categories'
import Hero from './components/Hero'
import { useSelector } from 'react-redux'
function Blog() {
  const blog = useSelector((state) => state.blog?.categories)
  return (
    <div>
      <Hero />
      <Categories />
      <BlogCards blog={blog} />
    </div>
  )
}

export default Blog
