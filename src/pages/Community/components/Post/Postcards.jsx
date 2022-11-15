import React from 'react'

function Postcards() {
  return (
    <div className='post-cards'>
      <div className="row m-0">
        <div className="col-2">
          <img src="/images/emeka.png" alt="" />
        </div>
        <div className="col-10">
          <p>
            <div className="users">
              <span className="name">Emeka John</span>
              <span className="username">@mekusa</span>
              <span className="time">2m</span>
            </div>
            <div className="img-Box">
              <img src="/images/box/vr.png" alt="" />
            </div>
          </p>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </p>
          <div className="img-container">
            <img src="/images/postImg.png" alt="" />

          </div>
          <div className="footer-box">
            <span>
              <img src="/images/box/comment.png" alt="" />
              <span className="tag">25</span>
          </span>
            <span>
              <img src="/images/box/love.png" alt="" />
              <span className="tag">124</span>
          </span>
            <span>
              <img src="/images/box/share.png" alt="" />
              <span className="tag">345</span>
          </span>
            <span>
              <img src="/images/box/connect.png" alt="" /> 
          </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Postcards
