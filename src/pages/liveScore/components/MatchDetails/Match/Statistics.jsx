import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListStat from '../../../../../components/Matches/ListStat'
import { getStatistics } from '../../../../../store/LiveScores/Matches';

function Statistics() {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  const dispatch = useDispatch()
  const statistics = useSelector((state) => state.livescores.statistics);
  useEffect(() => {
    dispatch(getStatistics("215662"))
  }, [])
  console.log(statistics)
  return (
    <div className='statistics'>
      <div className="plank ">
        <a href="#all">MATCH</a>
        <a href="#first_half">FIRST HALF</a>
        <a href="#second_half">SECOND HALF</a>
      </div>

      {/*  Shots on Goal*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/*  Total Shots*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/* Blocked Shots*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/*  Shots insidebox*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/* Shots outsidebox*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/* Fouls */}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/* Corner Kicks*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/*  Shots on Goal*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/*  Shots on Goal*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/*  Shots on Goal*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/*  Shots on Goal*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />
      {/*  Shots on Goal*/}
      <ListStat home={statistics[0]?.statistics} away={statistics[1]?.statistics} />

    </div>
  )
}

export default Statistics
