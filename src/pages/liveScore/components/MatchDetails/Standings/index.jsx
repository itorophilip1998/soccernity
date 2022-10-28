import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStanding } from '../../../../../store/LiveScores/Matches'
/*eslint-disable*/
const query = new URLSearchParams(window.location.search);
const id = query.get("id");
const array = query.get("array");
const Standings = () => {
  const dispatch = useDispatch()
  const scores = useSelector((state) => state.livescores?.[array]);
  const league = scores?.find((data) => data?.fixture?.id === parseInt(id))
  useEffect(() => {
    dispatch(getStanding({ season: moment().format("YYYY"), league: league?.league?.id }))
  }, [])
  const standing = useSelector((state) => state.livescores?.standing);
  console.log(standing[0]?.league)
  return (
    <div className='standingTables'>

      <table className="table table-borderless ">
        <thead >
          <tr >
            <th >TEAM</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>G</th>
            <th>PTS</th>
            <th>FORM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-left'>
              <div className="numCount  ">1.</div>
              <img src="/images/liverpool.png" alt="" />
              <span className="name">Liverpool</span>
            </td>
            <td>9</td>
            <td>8</td>
            <td>0</td>
            <td>1</td>
            <td>23:10</td>
            <td>24</td>
            <td>
              <div className="numCount">?</div>
              <div className="numCount">W</div>
              <div className="numCount">W</div>
              <div className="numCount">L</div>
              <div className="numCount">D</div>

            </td>
          </tr>
          <tr>
            <td className='text-left' >
              <div className="numCount">1.</div>
              <img src="/images/liverpool.png" alt="" />
              <span className="name">Liverpool</span>
            </td>
            <td>9</td>
            <td>8</td>
            <td>0</td>
            <td>1</td>
            <td>23:10</td>
            <td>24</td>
            <td>
              <div className="numCount">?</div>
              <div className="numCount">W</div>
              <div className="numCount">W</div>
              <div className="numCount">L</div>
              <div className="numCount">D</div>

            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Standings
