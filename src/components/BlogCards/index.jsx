import React from 'react'

function BlogCard({blog}) {
  return (
    <div className='blogcards '> 
          <div className={blog.isTop?'headeline-cards':'detailed-cards'}>
              <img src={blog.img} alt="" />
              <div className="card-body">
                  <div className='tag'>{blog.category}</div>
                  <h3>{blog.topic}</h3> 
                  <p>{blog.body}</p>
                  <p>
                      <img src="/images/time.png" alt="" />
                      <span>{blog.date}</span>
                  </p>
              </div>
          </div> 
    </div>
  )
}

export default BlogCard
