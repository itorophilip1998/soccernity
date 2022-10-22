import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListStat from '../../../../../components/Matches/ListStat'
import { getStatistics } from '../../../../../store/LiveScores/Matches';
/*eslint-disable*/
function Statistics() {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  const dispatch = useDispatch()
  const statistics = useSelector((state) => state.livescores.statistics);
  useEffect(() => {
    dispatch(getStatistics("215662"))
  }, [])
  return (
    <div className='statistics pb-4'>
      <div className="plank text-uppercase ">
        {/* <a href="#all">MATCH</a>
        <a href="#first_half">FIRST HALF</a>
        <a href="#second_half">SECOND HALF</a> */}
        Statistics
      </div>

      {/*  Shots on Goal*/}
      <ListStat home={statistics[0]?.statistics[0]} away={statistics[1]?.statistics[0]} />
      {/*  Total Shots*/}
      <ListStat home={statistics[0]?.statistics[1]} away={statistics[1]?.statistics[1]} />
      {/* Blocked Shots*/}
      <ListStat home={statistics[0]?.statistics[2]} away={statistics[1]?.statistics[2]} />
      {/*  Shots insidebox*/}
      <ListStat home={statistics[0]?.statistics[3]} away={statistics[1]?.statistics[3]} />
      {/* Shots outsidebox*/}
      <ListStat home={statistics[0]?.statistics[4]} away={statistics[1]?.statistics[4]} />
      {/* Fouls */}
      <ListStat home={statistics[0]?.statistics[5]} away={statistics[1]?.statistics[5]} />
      {/* Corner Kicks*/}
      <ListStat home={statistics[0]?.statistics[6]} away={statistics[1]?.statistics[6]} />
      {/* Offsides*/}
      <ListStat home={statistics[0]?.statistics[7]} away={statistics[1]?.statistics[7]} />
      {/* Ball Possession*/}
      <ListStat home={statistics[0]?.statistics[8]} away={statistics[1]?.statistics[8]} />
      {/* Yellow Cards*/}
      <ListStat home={statistics[0]?.statistics[9]} away={statistics[1]?.statistics[9]} />
      {/* Red Cards*/}
      <ListStat home={statistics[0]?.statistics[10]} away={statistics[1]?.statistics[10]} />
      {/* Goalkeeper Saves*/}
      <ListStat home={statistics[0]?.statistics[11]} away={statistics[1]?.statistics[11]} />
      {/*Total passes*/}
      <ListStat home={statistics[0]?.statistics[12]} away={statistics[1]?.statistics[12]} />
      {/* Passes accurate*/}
      <ListStat home={statistics[0]?.statistics[13]} away={statistics[1]?.statistics[13]} />
      {/*Passes %*/}
      <ListStat home={statistics[0]?.statistics[14]} away={statistics[1]?.statistics[14]} />
      {/*Passes %*/}
      <ListStat home={statistics[0]?.statistics[15]} away={statistics[1]?.statistics[15]} />

    </div>
  )
}

export default Statistics
