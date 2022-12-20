import React from 'react'
import { user } from "../../../../DB"
import TrendingNews from '../TrendForYou/TrendingNews'
import SuggestedFreinds from '../SuggestedFreinds'
import Postcards from '../Post/Postcards'
import TrendForYou from '../TrendForYou/TrendForYou'
import FixturesSub from '../Fixtures'
import ViewProfile from './ViewProfile'
import PostMediaBox from './PostMediaBox'
function ShowProfile() {
    return (
        <div className=' community'>
            <div className="container-fluid ">
                <div className="row m-0">
                    <div className="col-md-3 sidebarleft p-0 mx-auto  centerPage">
                        <TrendingNews user={user} className="mt-0" />
                        <SuggestedFreinds user={user} />
                    </div>
                    <div className="col-md-6 p-0 mx-auto centerPage">
                        <div className="mx-md-4 ">
                            <ViewProfile />
                            <PostMediaBox />
                            <Postcards />
                        </div>
                    </div>
                    <div className="col-md-3 p-0 mx-auto mt-3 centerPage">
                        <TrendForYou user={user} />
                        <FixturesSub user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProfile
