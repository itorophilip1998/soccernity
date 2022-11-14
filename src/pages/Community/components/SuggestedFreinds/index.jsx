import React from 'react'
const post = [1, 2, 3];
function SuggestedFreinds() {
    return (
        <div className='trending_news suggestedfreinds headbox'>
            <div className="header">
                <span> Suggested </span><img src="/images/reload.png" alt="" />
            </div>
            <div className="postNews">
                {post?.map((item, key) => (
                    <div className="row m-0">
                        <div className="col-4 p-0 ">
                            <img src="/images/pro2.png" className='profile-img ' alt="" />
                        </div>
                        <div className="col-8 p-0">
                            <div className="row m-0 p-0">
                                <div className="col-7 p-0">
                                    <h3>Emeka John</h3>
                                    <p>@mekusa</p>
                                </div>
                                <div className="col-5 p-0">
                                    <button className="btn isfollow">
                                        Follow
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 p-0 m-0">
                            <hr className="p-0 m-0" />
                        </div>
                    </div>
                ))}
                <div className="text-center  p-4">
                    <a href="/community" className='link-btn btn'>See more</a>
                </div>
            </div>
        </div>
    )
}

export default SuggestedFreinds
