import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStanding } from '../../../../../store/LiveScores/Matches'
import StandingTable from './StandingTable';
/*eslint-disable*/
const query = new URLSearchParams(window.location.search);
const id = query.get("id");
const array = query.get("array");
const Standings = () => {
  const dispatch = useDispatch()
  const scores = useSelector((state) => state.livescores?.[array]);
  const league = scores?.find((data) => data?.fixture?.id === parseInt(id))
  console.log(league)
  useEffect(() => {
    dispatch(getStanding({ season: moment().format("YYYY"), league: league?.league?.id }))
  }, [])
  const standing = useSelector((state) => state.livescores?.standing);


  return (
    <div className='standingTables'>
      <StandingTable standing={standing} />
      <div className="standingInfo">
        <div className="stand ">
          <div className="numCount promoteda"></div> Promotion - UEFA Champions League (Group Stage)
        </div>
        <div className="stand">
          <div className="numCount promotedb"></div> Promotion - Europa Leagie Group (Group Stage)
        </div>
        <div className="stand">
          <div className="numCount relegation"></div> Relegation - Championship
        </div>
      </div>
    </div>
  )
}

export default Standings
