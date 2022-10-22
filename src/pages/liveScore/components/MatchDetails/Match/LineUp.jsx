import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Clothe } from '../../../../../components/Svg'
import { getLineUps } from '../../../../../store/LiveScores/Matches';
/*eslint-disable*/

function LineUp() {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  const dispatch = useDispatch()
  const lineups = useSelector((state) => state.livescores.lineups);
  console.log(lineups)
  useEffect(() => {
    dispatch(getLineUps("215662"))
  }, [])

  return (
    <div className='lineUp'>
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
          <div className="col-6">
            <ul>
              {lineups[0]?.startXI.map((item, key) => (<li key={key}>
                <span className="number">{item?.player?.number} </span>
                <span className="number">{item?.player?.name} </span>
              <span className="number"></span>
              <span className="number"></span>
              </li>))}
            </ul>
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
      <div className="playersX1">
        <div className="plank  px-2 ">
          SUBTITUTES
        </div>
      </div>
      <div className="playersX1">
        <div className="plank  px-2 ">
          COACHES
        </div>
      </div>
    </div>
  )
}

export default LineUp
