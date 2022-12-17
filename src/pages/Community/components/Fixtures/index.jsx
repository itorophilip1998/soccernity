import React from 'react'
const post = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function FixturesSub() {
    return (
        <div className='trending_news headbox '>
            <div className="header">
                <span> Fixtures </span><img src="/images/reload.png" alt="" />
            </div>
            <div className="postNews community_fixtures">
                {post?.map((item, key) => (
                    <div className="row m-0">
                        <div className="col-12 block p-0">
                            <div className="home">
                                <span className='pr-1'>Chelsea</span>
                                <img src="/images/chelsea.png" alt="" />
                            </div>
                            <div className="vs">
                                <span>16:00</span> 
                            </div>
                            <div className="away">
                                <img src="/images/liverpool.png" alt="" />
                                <span className='pl-1'>Liverpool</span>
                            </div>
                        </div>
                        <div className="col-12 p-0 m-0">
                            <hr className="p-0 m-0" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FixturesSub
