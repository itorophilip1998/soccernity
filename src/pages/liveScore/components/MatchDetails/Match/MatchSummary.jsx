import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../../../../store/LiveScores/Matches';

/* eslint-disable  */
function MatchSummary() {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");
    const array = query.get("array");
    const dispatch = useDispatch()
    const match_summary = useSelector((state) => state.livescores.match_summary);
    const away_id = window.localStorage.getItem("away")
    useEffect(() => {
        dispatch(getEvents(id))
    }, [])
    const scores = useSelector((state) => state.livescores?.[array]);
    const summarry = scores?.find((data) => data?.fixture?.id === parseInt(id))
    const firsthalf = moment(summarry?.fixture?.periods?.first).format("mm")
    const secondhalf = moment(summarry?.fixture?.periods?.second).format("mm")

    return (
        <div className='match_summary '>

            <div className="first_half">
                <div className="plank">
                    FIRST HALF <span className="goals">{summarry?.score?.halftime?.home}  -   {summarry?.score?.halftime?.away}</span>
                </div>
                {
                    match_summary?.map((item, key) =>
                        <div className={`event ${item?.time?.elapsed > parseInt(firsthalf) && 'd-none'}`} key={key}  >
                            {item?.team?.id !== parseInt(away_id) && <div className="home  ">
                                <span className="time ">{item?.time?.elapsed}’ {item?.time?.extra ? ` + ${item?.time?.extra}` : ""}</span>
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
            <div className="fsecond_half">
                <div className="plank">
                    SECOND HALF <span className="goals">{summarry?.score?.fulltime?.home} - {summarry?.score?.fulltime?.away}</span>
                </div>
                {
                    match_summary?.map((item, key) =>
                        <div className={`event ${item?.time?.elapsed < parseInt(secondhalf) && 'd-none'}`} key={key}  >

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
            <div className="match_information pb-4">
                <div className="plank">
                    MATCH INFORMATION
                </div>
                <div className="referee">
                    <img src="/images/refree.png" alt="" />

                    <span className="mx-3 name">REFEREE</span>

                    <span className="float-right ">
                        {summarry?.fixture?.referee}
                    </span>
                </div>
                <div className="referee my-3">
                    <img src="/images/stadium.png" alt="" />

                    <span className="mx-3 name">VENUE</span>

                    <span className="float-right ">
                        {summarry?.fixture?.venue?.name}
                    </span>
                </div>

            </div>
        </div>
    )
}

export default MatchSummary
