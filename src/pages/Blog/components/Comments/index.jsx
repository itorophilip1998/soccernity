import moment from 'moment'
import React, { useState } from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { addLikeReq } from '../../../../utils/request';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getSingleBlog } from '../../../../store/Blog';
import RepliesForm from '../BlogForm/RepliesForm';

// import Reactions from '../React';
function Comments({ user, item, article_id }) {
  const [value] = useState({ type: "blog", article_id: item?.id });
  const isLike = item?.likes.find((isLike) => isLike?.user_id === user?.id);
  const dispatch = useDispatch()

  const likeFunc = async () => {
    // setError(null)
    const res = await addLikeReq(value);
    if (res && res.data) {
      toast.success(res.data?.message)
      dispatch(getSingleBlog(article_id))
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
            <span className="length">{item?.likes?.length !== 0 ? item?.likes?.length : ""}</span> {item?.likes?.length !== 0 ? <img src="/images/dot.png" alt="" /> : ""}
            {/* {isReact && <Reactions />} */}
            <span className="react" onClick={() => likeFunc()}>
              <ThumbUpAltOutlinedIcon className={`ico ${isLike ? 'isLike' : ""}`} /></span>

            <img src="/images/dot.png" alt="" />
            {/* <span className="Like">Like</span> <img src="/images/dot.png" alt="" /> */}
            <span className="reply" data-toggle="modal" data-target={`#reply${item?.id}`}>Reply</span>
            <RepliesForm user={user} item={item} article_id={article_id} />
            {/* <img src="/images/dot.png" alt="" /> */}
            {/* <span className="share">Share</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
