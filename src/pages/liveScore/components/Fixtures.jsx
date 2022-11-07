import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFixturesDay1 } from '../../../store/LiveScores/Fixtures'
import Day1 from './Matches/Day1'
// import Day2 from './Matches/Day2'
// import Day3 from './Matches/Day3'
import Live from './Matches/Live'
import Today from './Matches/Today'
/*eslint-disable*/
const Fixtures = () => {
    const [popcalender, setPopcallender] = useState(false)
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFixturesDay1({ date }))
    }, [])
    return (
        <div className='fixtures   pl-md-3 container' >
            <ul className="nav nav-pills  justify-content-start mb-3 shadow" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-live-tab" data-toggle="pill" data-target="#pills-live" type="button" role="tab" aria-controls="pills-live" aria-selected="true">{"Live"}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-today-tab" data-toggle="pill" data-target="#pills-today" type="button" role="tab" aria-controls="pills-today" aria-selected="false">{"Today"}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-day1-tab" data-toggle="pill" data-target="#pills-day1" type="button" role="tab" aria-controls="pills-day1" aria-selected="false">{date}</button>
                </li>
                {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-day2-tab" data-toggle="pill" data-target="#pills-day2" type="button" role="tab" aria-controls="pills-day2" aria-selected="false">{moment().add(2, 'days').format("dddd")}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-day3-tab" data-toggle="pill" data-target="#pills-day3" type="button" role="tab" aria-controls="pills-day3" aria-selected="false">{moment().add(3, 'days').format("dddd")}</button>
                </li> */}


            </ul>
            <div className="loadbox">
                <img src="/images/calender.png" alt="" onClick={() => setPopcallender(true)} />

                {popcalender === true && <div className="popcallender shadow">
                    <div className="closeBtn shadow" onClick={() => setPopcallender(false)} >
                        x
                    </div>
                    <input type="date" data-date-size="4" data-date-inline-picker="true" className='form-control' onChange={(e) => { setDate(moment(e.target.value).format("YYYY-MM-DD")); setPopcallender(false); dispatch(getFixturesDay1({ date })) }} />
                </div>}
            </div>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-live" role="tabpanel" aria-labelledby="pills-live-tab">
                    <Live />
                </div>
                <div className="tab-pane fade" id="pills-today" role="tabpanel" aria-labelledby="pills-today-tab">
                    <Today />
                </div>
                <div className="tab-pane fade" id="pills-day1" role="tabpanel" aria-labelledby="pills-day1-tab">
                    <Day1 />
                </div>
                {/* <div className="tab-pane fade" id="pills-day2" role="tabpanel" aria-labelledby="pills-day2-tab">
                    <Day2 />
                </div>
                <div className="tab-pane fade" id="pills-day3" role="tabpanel" aria-labelledby="pills-day3-tab">
                    <Day3 />

                </div> */}
            </div>
        </div>
    )
}

export default Fixtures
