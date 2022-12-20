import React from 'react'
import Profile from './components/Profile'
import { user } from "../../DB"
import SuggestedFreinds from './components/SuggestedFreinds'
import FixturesSub from './components/Fixtures'
import TrendingNews from './components/TrendForYou/TrendingNews'
import TrendForYou from './components/TrendForYou/TrendForYou'
import PostBlog from './components/Post/PostBlog'
import Postcards from './components/Post/Postcards'
function Community() {
    return (
        <div className=' community'>
            <div className="container-fluid ">
                <div className="row m-0">
                    <div className="col-md-3 sidebarleft p-0 mx-auto centerPage">
                        <Profile user={user} />
                        <TrendingNews user={user} />
                        <SuggestedFreinds user={user} />
                    </div>
                    <div className="col-md-6 p-0 mx-auto centerPage">
                        <div className="mx-md-4">
                            <PostBlog />
                            <Postcards />
                      </div>
                    </div>
                    <div className="col-md-3 p-0 mx-auto centerPage">
                        <TrendForYou user={user} />
                        <FixturesSub user={user} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
