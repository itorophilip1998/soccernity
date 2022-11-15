import React from 'react'
// import FilterByLeague from './components/FilterByLeague'
// import Fixtures from './components/Fixtures'

const LiveScore = () => {
    return (
        <div className='container livescore_root'>
            {/* <div className="row m-0">
                <div className="col-md-4 p-0 sidepage">
                    <FilterByLeague />
                </div>
                <div className="col-md-8 ">
                    <Fixtures/>
                </div>
            </div> */}

            {/* <div id="wg-api-football-fixtures"
                data-host="v3.football.api-sports.io"
                data-refresh="60"
                data-date="2022-02-11"
                data-key="da28481e728a0398152f9e642f2b6d8e"
                data-theme=""
                data-show-errors="false"
                class="api_football_loader">
            </div>
            
            
            */}

            <div id="wg-api-football-games"
                data-host="v3.football.api-sports.io"
                data-key="da28481e728a0398152f9e642f2b6d8e"
                data-date=""
                data-league=""
                data-season=""
                data-theme=""
                data-refresh="15"
                data-show-toolbar="true"
                data-show-errors="false"
                data-show-logos="true"
                data-modal-game="true"
                data-modal-standings="true"
                data-modal-show-logos="true">
            </div>
            <div className="reload">

            </div>
        </div>
    )
}

export default LiveScore
