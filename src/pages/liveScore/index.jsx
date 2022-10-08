import React from 'react'
import FilterByLeague from './components/FilterByLeague'
import Fixtures from './components/Fixtures'

const LiveScore = () => {
    return (
        <div className='container'>
            <div className="row m-0">
                <div className="col-md-4">
                    <FilterByLeague />
                </div>
                <div className="col-md-8">
                    <Fixtures/>
                </div>
            </div>
        </div>
    )
}

export default LiveScore
