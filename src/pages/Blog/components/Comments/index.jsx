import moment from 'moment'
import React,{useState} from 'react'
import { comments } from "../../../../DB"; 
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import Reactions from '../React';
function Comments() {
    const item = comments[0];
    const [isReact,setisReact]=useState(false)
  return (
    <div className="commentBox mt-4">
      <div className="row m-0">
              <div className="img-box">
                  <img src={`/images/comments/${item.img}.png`} alt="" className="commentProfileLogo" /> 
           
        </div>
              <div className="col-9">
                  <h5>
                      {item.name}
                      <img src="/images/dot.png" alt="" className='dot'/>
                      <span className="time">{moment(item.time).startOf('hour').fromNow() }
                      </span>  
                  </h5>
                  <p>{item.comment}</p>
                  <div className="infoSection">
                      <span className="length">25</span> <img src="/images/dot.png" alt="" />
                     {isReact && <Reactions/>}
                      <span className="react" onClick={()=>setisReact(!isReact)}><ThumbUpAltOutlinedIcon className='ico'/></span> <img src="/images/dot.png" alt="" />
                      <span className="Like">React</span> <img src="/images/dot.png" alt="" />
                      <span className="reply">Reply</span> <img src="/images/dot.png" alt="" />
                      <span className="share">Share</span>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
