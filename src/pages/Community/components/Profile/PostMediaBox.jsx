import React from 'react'
import { Link } from 'react-router-dom'

function PostMediaBox() {
    return (
        <div className='PostMediaBox  mx-auto shadow'>
            <Link to={'/profile?type=post'}>Posts</Link>
            <div className="dividerBox"></div>
            <Link to={'/profile?type=media'}>Media</Link>
            <div className="dividerBox"></div>
            <Link to={'/profile?type=saved'}>Saved</Link> 
        </div>
    )
}

export default PostMediaBox
