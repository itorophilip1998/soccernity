import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { addCommentReq } from '../../../../utils/request';
import { useDispatch } from 'react-redux';
import { getSingleBlog } from '../../../../store/Blog';

function BlogForm({ user, article_id }) {
  const dispatch = useDispatch()
  const queryId = window.location.pathname.slice(6);

  const [value, setformValue] = useState();
  const [isload, setLoading] = useState(false);
  const comment_input = document.querySelector("#body")
  const navigate = (url) => {
    window.location.href = url
  }
  const addValue = (e) => {
    setformValue({ ...value, [e.target.name]: e.target.value, article_id })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // setError(null)
    const res = await addCommentReq(value);
    if (res && res.data) {
      toast.success(res.data?.message)
      comment_input.value = ""
      setLoading(false)
      dispatch(getSingleBlog(queryId))

    }
    else if (res && res?.response) {
      toast.error(res?.response?.data?.message)
      setLoading(false)
      if (res?.response?.data?.message === 'Unauthenticated.') {
        window.location.href = "/auth/signin"
      }
    }
    else {
      toast.info('Oops something went wrong')
      setLoading(false)
    }

  }
  return (
    <div className='blogForm'>
      <h4>Join the discussion</h4>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <div className="row m-0">
            <div className="col-8 p-0">
              <input type="email" className="form-control" readOnly name="" id="" aria-describedby="emailHelpId" placeholder="Email" value={user?.email} />

            </div>
            <div className="col-4">
              <div className="img">
                <span>Login via: </span>
                <img src="/images/facebook.png" alt="" onClick={() => navigate("/auth/signin")} />
                <img src="/images/google.png" className='google' alt="" onClick={() => navigate("/auth/signin")} />
                <img src="/images/twitter.png" alt="" onClick={() => navigate("/auth/signin")} />
              </div>
            </div>
          </div>
          {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
        </div>
        <div className="form-group">
          <textarea name="body" id="body" cols="30" rows="10" className='form-control' placeholder='Enter your message here'
            onChange={(e) => addValue(e)}
            required></textarea>
          {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
        </div>
        <div className="form-group">
          <button className="btn" disabled={isload === true ? true : false}>
            {isload ? 'Commenting...' : "Comment"}</button>
        </div>
      </form>
      <ToastContainer />

    </div>
  )
}

export default BlogForm
