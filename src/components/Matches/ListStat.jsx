import React from 'react'

function ListStat({ away,home }) {
    console.log(away,home)
    return (
        <div div className="list_of_stat" >
            {/* Ball Possession */}

            <div className="top">
                <span className="home_per">{home?.value ?? 0}</span>
                <span className="name text-center">{home?.type}</span>
                <span className="away_per text-right">{away?.value ?? 0}</span>
            </div>

            <div className="progressBars row m-0 mt-3">
                <div className="home col-6 p-0 pr-1 ">
                    <div class="progress ">
                        <div class="progress-bar bg-home" role="progressbar" style={{ width: "70%" }}
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="away col-6 p-0 pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-away" role="progressbar" style={{ width: "25%" }}
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ListStat
