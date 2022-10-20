import React from 'react'
import LineUp from './LineUp'
import MatchSummary from './MatchSummary'
import Statistics from './Statistics'

const Match = () => {
  return (
    <div>

      <div className='fixtures match_title '>
        <ul className="nav nav-pills mb-3 shadow-none" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="pills-match_Summary-tab" data-toggle="pill" data-target="#pills-match_Summary" type="button" role="tab" aria-controls="pills-match_Summary" aria-selected="true">{"Match Summary"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-Statistics-tab" data-toggle="pill" data-target="#pills-Statistics" type="button" role="tab" aria-controls="pills-Statistics" aria-selected="false">{"Statistics"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-Lineups-tab" data-toggle="pill" data-target="#pills-Lineups" type="button" role="tab" aria-controls="pills-Lineups" aria-selected="false">{"Lineups"}</button>
          </li>

        </ul>

        <div className="tab-content container" id="pills-tabContent">
          <div className="tab-pane fade" id="pills-match_Summary" role="tabpanel" aria-labelledby="pills-match_Summary-tab">
            <MatchSummary />
          </div>
          <div className="tab-pane fade  show active" id="pills-Statistics" role="tabpanel" aria-labelledby="pills-Statistics-tab">
            <Statistics />
          </div>
          <div className="tab-pane fade" id="pills-Lineups" role="tabpanel" aria-labelledby="pills-Lineups-tab">
            <LineUp />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Match
