import moment from 'moment'
import React, { useState } from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { addLikeReq } from '../../../../utils/request';
import { toast } from 'react-toastify';

// import Reactions from '../React';
function Comments({ user, item, article_id }) {
  const [value] = useState({ type: "blog", article_id });


  const likeFunc = async () => {
    // setError(null)
    const res = await addLikeReq(value);
    if (res && res.data) {
      toast.success(res.data?.message)
    }
    else if (res && res?.response) {
      toast.error(res?.response?.data?.message)
      if (res?.response?.data?.message === 'Unauthenticated.') {
        window.location.href = "/auth/signin"
      }
    }
    else {
      toast.info('Oops something went wrong')
    }

  }
  return (
    <div className="commentBox mt-4">
      <div className="row m-0">
        <div className="img-box">
          <img src={item.user?.profile?.profile_photo ?? `/images/comments/1.png`} alt="" className="commentProfileLogo" />

        </div>
        <div className="col-9">
          <h5>
            {item.name}
            <img src="/images/dot.png" alt="" className='dot' />
            <span className="time">{moment(item.created_at).startOf('hour').fromNow()}
            </span>
          </h5>
          <p>{item.body}</p>
          <div className="infoSection">
            <span className="length">25</span> <img src="/images/dot.png" alt="" />
            {/* {isReact && <Reactions />} */}
            <span className="react" onClick={() => likeFunc()}><ThumbUpAltOutlinedIcon className='ico' /></span> <img src="/images/dot.png" alt="" />
            {/* <span className="Like">Like</span> <img src="/images/dot.png" alt="" /> */}
            <span className="reply">Reply</span>
            {/* <img src="/images/dot.png" alt="" /> */}
            {/* <span className="share">Share</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
