import React from 'react'
import FilterByLeague from './components/FilterByLeague'
import Fixtures from './components/Fixtures'

const LiveScore = () => {
    return (
        <div className='container livescore_root'>
            <div className="row m-0">
                <div className="col-md-4 p-0 sidepage">
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
