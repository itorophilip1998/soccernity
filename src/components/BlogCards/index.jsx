import React from 'react'
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
function BlogCard({ blog }) {
  console.log(blog)
  return (
    <div className="container-fluid pb-3">
      {blog?.data?.map((category, index) =>
        <div className={'row m-0 blogcards'} key={index}>
          {category?.articles?.map((article, key) =>
            <div key={key} className={`${article?.key === 0 ? 'headeline-cards' : 'detailed-cards col-md-4 mx-auto'} my-3`}>
              <div className="img">
                {/* <img src={article.img} alt="" /> */}
              </div>
              <div className="card-body">
                {article?.key === 0 && <div className='tag'>{category?.name}</div>}
                <h3>
                  <Link to={"/blog/blog_id"}>{article.title}</Link>
                </h3>
                <p className='body'>{article?.body}</p>
                <p className='time'>
                  <img src="/images/time.png" alt="" />
                  <span>{moment(article?.created_at).format("DD/MM/YYYY")}</span>
                </p>
              </div>
            </div>)}


        </div>
      )
      }
      <div className="loadMore col ">
        <button className='loadMore-btn'>See More</button>
      </div>
    </div>
  )
}

export default BlogCard
