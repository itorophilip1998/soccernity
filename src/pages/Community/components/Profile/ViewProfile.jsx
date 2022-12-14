import React, { useState } from 'react'
import EditProfile from './EditProfile'

function ViewProfile() {
  const [isfollow, setIsFollow] = useState(false)
  return (
    <div className='viewProfile'>
      <div class="card">
        <img class="card-img-top" src="/images/profile/defaultbg.png" alt="" />
        <div class="card-body">
          <img src="/images/profile/profile.png" className='avatar' alt="" />
          <div className="row m-0 ">
            <div className="col-md-12 p-0 text-right firstCol">
              <div className="isGuest d-none">
                {/* dropdown */}
                <div class="dropdown">
                  <div class="dropdown-menu shadowBox" aria-labelledby="triggerisguest">
                    <button class="dropdown-item"  > <img src="/images/profile/clip.png" alt="" /> Copy Profile Link</button>
                    <button class="dropdown-item"  > <img src="/images/profile/share.png" alt="" /> Share Profile Via</button>
                    <button class="dropdown-item"  > <img src="/images/profile/block.png" alt="" /> Block <span className='font-weight-normal'>nelson_iheagwam</span></button>
                  </div>
                </div>
                <button className="btn lightHover" id="triggerisguest" data-toggle="dropdown" aria-haspopup="true"><img src="/images/profile/vh.png" alt="" /></button>
                <button className="btn lightHover"><img src="/images/profile/msg.png" alt="" /></button>
                <button className="btn btn-blue-btn shadow" onClick={() => setIsFollow(!isfollow)}>{isfollow ? 'Follow' : 'Unfollow'}</button>
              </div>
              <div className="isAuth ">
                <button className="btn btn-blue-btn shadow" data-toggle="modal" data-target="#editProfile">Edit Profile</button>
                <EditProfile />

              </div>
            </div>


            <div className="col-md-12 text-box">
              <h4 class="fullname">Adeniyi Christiana
                <span className="isclub"><img src="/images/profile/isclub.png" alt="" /></span>
                <span className="location"><img src="/images/profile/location.png" alt="" /> Port Harcourt</span>
              </h4>
              <p class="username">@nelson_iheagwam</p>
              <p className="bio">Fine Girl, Hard Arsenal Stan!</p>
              <p className="follows">
                <span className="info ml-0">
                  5,500
                  <span className="details">Followers</span>
                </span>
                <div className="dotDivider"></div>
                <span className="info">
                  5,500
                  <span className="details">Following</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProfile
