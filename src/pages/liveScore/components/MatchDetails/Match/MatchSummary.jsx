import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../../../../store/LiveScores/Matches';

function MatchSummary() {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");
    const array = query.get("array");
    const dispatch = useDispatch()
    // const match_summary = useSelector((state) => state.livescores.match_summary);
    const away_id = window.localStorage.getItem("away")
    useEffect(() => {
        dispatch(getEvents(id))
    }, [])
    const scores = useSelector((state) => state.livescores?.[array]);
    const match_summary = scores?.find((data) => data?.fixture?.id === parseInt(id))
    console.log(match_summary)
    // const timeEllapse = (time) => {
    //     if (time < 45) {
    //         time = "FIRST HALF"
    //     }
    //     else if (time > 45) {
    //         time = "SECOND HALF"
    //     }

    //     return time;
    // }


    return (
        <div className='match_summary '>

            <div className="plank">
                {match_summary?.goals?.home + " - " + match_summary?.goals?.away}
            </div>
            {
                match_summary?.events?.map((item, key) =>
                    <div className={`event`} key={key}>


                        {item?.team?.id !== parseInt(away_id) && <div className="home  ">
                            <span className="time ">{item?.time?.elapsed}’</span>
                            {item?.type !== 'Card' && <img src={`/images/${item?.type}.png`} alt="" />}
                            {(item?.detail === 'Yellow Card') && <img src={`/images/yellowcard.png`} alt="" />}
                            {(item?.detail === 'Red Card') && <img src={`/images/redcard.png`} alt="" />}
                            {item?.type === 'Goals' && <span className="goals"></span>}
                            <span className="players_name">{item?.player?.name}</span>
                            {item?.assist?.name && <span className="assist">({item?.assist?.name})</span>}
                        </div>
                        }
                        {item?.team?.id === parseInt(away_id) && <div className="away text-right">
                            {item?.assist?.name && <span className="assist">({item?.assist?.name})</span>}
                            <span className="players_name">{item?.player?.name}</span>
                            {item?.type !== 'Card' && <img src={`/images/${item?.type}.png`} alt="" />}
                            {(item?.detail === 'Yellow Card') && <img src={`/images/yellowcard.png`} alt="" />}
                            {(item?.detail === 'Red Card') && <img src={`/images/redcard.png`} alt="" />}
                            {item?.type === 'Goals' && <span className="goals"></span>}
                            <span className="time ">{item?.time?.elapsed}’</span>

                        </div>}
                    </div>
                )
            }
        </div>
    )
}

export default MatchSummary
