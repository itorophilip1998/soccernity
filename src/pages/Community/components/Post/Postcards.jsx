import React from 'react'
const data = [1, 2, 3, 4, 5, 7, 6];
function Postcards() {

  return (
    <>
      {
        data.map((item, key) => (
          <div className='post-cards' key={key}>
            <div className="row m-0">
              <div className="col-2">
                <img src="/images/emeka.png" alt="" />
              </div>
              <div className="col-10 p-0 ">
                <p className='topinfo'>
                  <div className="users">
                    <span className="name">Emeka John</span>
                    <span className
                      ="username">@mekusa</span>
                    <span className="time">2m</span>
                  </div>
                  <div className="imgBox ">
                    <img src="/images/box/vr.png" className='link' alt="" />
                  </div>
                </p>
                <p className="post_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                </p>
                {(key === 1 || key === 4) && <div className="img-container">
                  <img src="/images/postImg.png" className='w-100' alt="" />

                </div>}
                <div className="footer-box">
                  <span className="tag">
                    <img src="/images/box/comment.png" alt="" />
                    <span>25</span>
                  </span>
                  <span className="tag">
                    <img src="/images/box/love.png" alt="" />
                    <span >124</span>
                  </span>
                  <span className="tag">
                    <img src="/images/box/share.png" alt="" />
                    <span >345</span>
                  </span>
                  <span className="tag">
                    <img src="/images/box/connect.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}


export default Postcards
