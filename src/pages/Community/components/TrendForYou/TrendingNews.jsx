import React from 'react'
const post = [1, 2, 3];
function TrendingNews() {
    return (
        <div className='trending_news headbox'>
            <div className="header">
                <span> Trending News </span><img src="/images/reload.png" alt="" />
            </div>
            <div className="postNews">
                {post?.map((item, key) => (
                    <div className="row m-0">
                        <div className="col-4 p-0 ">
                            <img src="/images/Intersect.png" alt="" />
                        </div>
                        <div className="col-8 p-0">
                            <h3>Kane joins 250 club after heading Spurs past Wolves</h3>
                            <p>Harry Kane scored his 250th goal for Totten
                                ham as Antonio Conte's..........</p>
                            <p className="time">
                                <img src="/images/time.png" alt="" />
                                <span className="ml-3">08/08/2022</span>
                            </p>
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

export default TrendingNews
