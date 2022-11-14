import React from 'react'
const post = [1, 2, 3, 4, 5, 6, 7];
function TrendForYou() {
    return (
        <div className='trending_news headbox p-0 m-0'>
            <div className="header">
                <span> Trends for you</span><img src="/images/reload.png" alt="" />
            </div>
            <div className="postNews">
                {post?.map((item, key) => (
                    <div className="row m-0">
                        <div className="col-8 p-0">
                            <h3>Ronaldo</h3>
                            <p>2500 Posts</p>
                        </div>

                        <div className="col-4 p-0 ">
                            <img src="/images/box/hr.png" className='img-hr' alt="" />
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

export default TrendForYou
