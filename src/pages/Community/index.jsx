import React from 'react'
import Profile from './components/Profile'
import { user } from "../../DB"
function Community() {
    return (
        <div className=' community'>
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-3 p-0">
                        <Profile user={user} />
                    </div>
                    <div className="col-md-6 p-0"></div>
                    <div className="col-md-3 p-0"></div>
                </div>
            </div>
        </div>
    )
}

export default Community
