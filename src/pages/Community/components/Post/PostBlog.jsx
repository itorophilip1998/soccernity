import React from 'react'
import PopupPost from './PopupPost'

function PostBlog() {
    return (
        <div className='postBox postBox2'>
            <div className="row m-0">
                <div className="col-2 text-center p-0">
                    <img src="/images/profile.png" alt="" />
                </div>
                <div className="col-9 p-md-0">
                    <input name="" placeholder="What’s happening?" data-toggle="modal" data-target="#loadPopup" />
                </div>
                <PopupPost />
            </div>
        </div>
    )
}

export default PostBlog
