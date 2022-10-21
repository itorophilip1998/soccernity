import React from 'react'

function ListStat({ away, home }) {
    const _home = parseInt(home?.value?.toString().replace('%', ""));
    const _away = parseInt(away?.value?.toString().replace('%', ""));
    const __home = !isNaN(_home) ? _home : 0;
    const __away = !isNaN(_away) ? _away : 0;
    const _total = __home + __away;
 
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
                        <div class="progress-bar bg-home" role="progressbar" style={{    width: `${parseInt((__home / _total) * 100 / 1)}%` }}
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="away col-6 p-0 pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-away" role="progressbar" style={{ width: `${parseInt((__away / _total) * 100 / 1)}%` }}
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ListStat
