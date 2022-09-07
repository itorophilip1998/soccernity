import React from 'react'
import moment from 'moment/moment';
function BlogCard(props) {
  return (
    <div className={'row m-0 blogcards'}> 
      {props?.blog?.map((blog, key) =>
        <div key={key} className={  `${blog.isTop ? 'headeline-cards' : 'detailed-cards col-md-4 mx-auto'} my-3`}>
           <div className="img">
              <img src={blog.img} alt="" /> 
          </div>     
              <div className="card-body">
              {blog.isTop && <div className='tag' >{blog.category}</div>}
              <h3>{blog.topic}</h3> 
              <p className='body'>{blog.body}</p>
              <p className='time'>
                  <img src="/images/time.png" alt="" />
                  <span>{moment(blog.date).format("DD/MM/YYYY")}</span>
              </p>
              </div>
          </div>) }
    </div>
  )
}

export default BlogCard
