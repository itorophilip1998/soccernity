import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Clothe } from '../../../../../components/Svg'
import { getLineUps } from '../../../../../store/LiveScores/Matches';
import { AwayPlayers, HomePlayers } from './Players';
/*eslint-disable*/

function LineUp() {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  const dispatch = useDispatch()
  const lineups = useSelector((state) => state.livescores.lineups);
  // console.log(lineups)
  useEffect(() => {
    dispatch(getLineUps(id))
  }, [])

  return (
    <div className='lineUp pb-3'>
      <div className="plank  px-2  justify-content-between">
        <span className="homeformation">{lineups[0]?.formation}</span>
        <span className="formation">FORMATION</span>
        <span className="awayformation">{lineups[1]?.formation}</span>
      </div>
      <div className="field row">

        <div className="home_formation col-6">
          {
            lineups[0]?.startXI.map((item, key) =>
              <div style={{ "grid": "auto" }} key={key}>
                <Clothe fill={item?.team?.color ?? "red"} />
              </div>
            )
          }
        </div>

        <div className="away_formation col-6 text-right"  >
          {
            lineups[0]?.startXI.map((item, key) =>
              <div key={key}>
                <Clothe fill={item?.team?.color ?? "blue"} />
              </div>
            )
          }
        </div>
      </div>

      <div className="playersX1">
        <div className="plank  px-2 ">
          STARTING LINEUPS
        </div>

        <div className="row m-0">
          <div className="col-6 p-0">
            <ul className='lineup_players'>
              {lineups[0]?.startXI.map((item, key) => (
                <HomePlayers key={key} item={item} />
              ))}
            </ul>
          </div>
          <div className="col-6 p-0">
            <ul className='lineup_players'>
              {lineups[1]?.startXI.map((item, key) => (
                <AwayPlayers key={key} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="playersX1">
        <div className="plank  px-2 ">
          SUBTITUTES
        </div>
        <div className="row m-0">
          <div className="col-6 p-0">
            <ul className='lineup_players'>
              {lineups[0]?.substitutes.map((item, key) => (
                <HomePlayers key={key} item={item} />
              ))}
            </ul>
          </div>
          <div className="col-6 p-0">
            <ul className='lineup_players'>
              {lineups[1]?.substitutes.map((item, key) => (
                <AwayPlayers key={key} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="playersX1">
        <div className="plank  px-2 ">
          COACHES
        </div>
        <div className="row m-0">
          <div className="col-6 p-0">
            <ul className='lineup_players'>
              <li className='home'>
                <img src="/images/jaycee.png" alt="" />
                <span className="name">{lineups[0]?.coach?.name} </span>
              </li>
            </ul>
          </div>
          <div className="col-6 p-0">
            <ul className='lineup_players'>
              <li className='away'>
                <img src="/images/jaycee.png" alt="" />
                <span className="name">{lineups[1]?.coach?.name} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineUp
