import React from 'react'
import BlogCard from '../../components/BlogCards'
import Categories from './components/Categories'
import Hero from './components/Hero' 
import {blog} from "../../DB"
function Blog() {
  
  return (
    <div>
      <Hero />
      <Categories /> 
      {blog.map((item, key) => <BlogCard blog={item} />) }
    </div>
  )
}

export default Blog
