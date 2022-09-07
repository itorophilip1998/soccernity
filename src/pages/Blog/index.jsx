import React from 'react'
import BlogCards from '../../components/BlogCards' 
import Categories from './components/Categories'
import Hero from './components/Hero' 
import {blog} from "../../DB"
function Blog() {
  
  return (
    <div>
      <Hero />
      <Categories />  
      <BlogCards blog={blog}/>
    </div>
  )
}

export default Blog
