import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment/moment';
import { trendingDB } from "../../DB";

function TrendingNews() {
    const trend = trendingDB;
  return (
      <div className='trendingNews'>
          <h1 >More Trending News</h1>
       <div className={'row m-0 p-0 blogcards'}> 
      {trend?.map((blog, key) => (<div key={key} className={`detailed-cards col-md-4 mx-auto my-3 `}>
           <div className="img">
              <img src={blog.img} alt="" /> 
          </div>     
           
              <div className="card-body"> 
            <h3>
            <Link to={"/blog/blog_id"}>{blog.topic}</Link>
            </h3> 
              <p className='body'>{blog.body}</p>
              <p className='time'>
                  <img src="/images/time.png" alt="" />
                  <span>{moment(blog.date).format("DD/MM/YYYY")}</span>
              </p>
              </div>
          </div>)) } 
    </div>
    </div>
  )
}

export default TrendingNews
