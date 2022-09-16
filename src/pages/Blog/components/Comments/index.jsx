import moment from 'moment'
import React from 'react'
import {comments} from "../../../../DB"
function Comments() {
    const item = comments[0];
  return (
    <div className="commentBox">
      <div className="row m-0">
              <div className="img-box">
                  <img src={`/images/comments/${item.img}.png`} alt="" className="commentProfileLogo" /> 
        
        </div>
              <div className="col-9">
                  <h5>
                      {item.name}
                      <div className="rounder-box"></div>
                      <span className="time">{moment(item.time).startOf('hour').fromNow() }
                      </span>  
                  </h5>
                  <p>{item.comment}</p>
                  <div className="infoSection">             <div className="rounder-box"></div>
                      <span className="length">25</span>    <div className="rounder-box"></div>
                      <span className="react"></span>       <div className="rounder-box"></div>
                      <span className="Like">Like</span>    <div className="rounder-box"></div>
                      <span className="reply">Reply</span>  <div className="rounder-box"></div>
                      <span className="share">Share</span>  <div className="rounder-box"></div>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
