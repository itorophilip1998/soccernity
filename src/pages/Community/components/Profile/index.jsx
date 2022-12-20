import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className="profile">
            <div class="card w-100 ">
                <img className="card-img-top" src="/images/profilebg.png" alt="Card" />
                <div className="card-body">
                    <img className="img-top-profile" src="/images/profile.png" alt="Card" />

                    <div className="card-content ">
                        <h4 className="card-title">Adeniyi Christiana</h4>
                        <p className="card-text">@christine001</p>
                    </div>
                    <hr />
                    <div className="card-content-2">
                        <p className="card-bio">Fine Girl, Hard Arsenal Stan!</p>
                        <p className="card-location"><img src="/images/location.png" alt="" /> Port Harcourt, Nigeria</p>
                    </div>
                    <hr />
                    <div className="card-content-2">
                        <div className="row m-0">
                            <div className="col-4 bt">
                                <span className="firm">Followers</span>
                                <p className="details">5,500</p>
                            </div>
                            <div className="col-4 bt">
                                <span className="firm">Posts</span>
                                <p className="details">250</p>
                            </div>
                            <div className="col-4">
                                <span className="firm">Following</span>
                                <p className="details">5,500</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center  p-4">
                        <Link to="/profile?user=itorophilip1998" className='link-btn btn'>View profile</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
