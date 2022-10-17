// import moment from 'moment'
import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import H2H from './H2H';
import Match from './Match';
import Standings from './Standings';
import Videos from './Videos';
const query = new URLSearchParams(window.location.search);
const array = query.get("array");
const id = query.get("id");
function MatchDetails() {
  const navigate = useNavigate()
  const scores = useSelector((state) => state.livescores?.[array]);
  const data = scores?.find((data) => data?.fixture?.id === parseInt(id))
  window.localStorage.setItem("away", data?.teams?.away?.id)
  const checkTime = (time) => {
    switch (time) {
      case "HT":
        time = "HALH TIME"
        break;
      case "FT":
        time = "FULL TIME"

        break;
      case "1H":
        time = "FIRST HALH"

        break;
      case "2H":
        time = "SECOND HALH"
        break;
      default:
        time = "UP COMING"
        break;
    }

    return time;
  }
  return (
    <div className='match_details ' >
      <div className="container">
        <div className=" text-right pt-2">
          <button className="close_windows btn btn-light" onClick={() => navigate('/')}>Close Window</button>
        </div>

        <div className="title row text-center ">

          <div className="home col-4">
            <div className="img_box">
              <img src={data?.teams?.home?.logo} alt="" />
            </div>
            <h2>{data?.teams?.home?.name.slice(0, 12)}</h2>
          </div>

          <div className="scores col-4">
            <h6 className='textTop'> {moment(data?.fixture?.date).format("DD - MM - YY")}<span className='ml-3'> {moment(data?.fixture?.date).format("HH:MM")}</span></h6>
            <h1>
              {data?.goals?.home ? data?.goals?.home : 0}
              -
              {data?.goals?.away ? data?.goals?.away : 0}
            </h1>
            <h6 className='fullTime'>
              {checkTime(data?.fixture?.status.short)}

            </h6>
          </div>

          <div className="away col-4">
            <div className="img_box">
              <img src={data?.teams?.away?.logo} alt="" />
            </div>
            <h2>{data?.teams?.away?.name.slice(0, 12)}</h2>
          </div>


        </div>
      </div>

      {/* details here */}
      <div className='fixtures match_details_summarry '>
        <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-match-tab" data-toggle="pill" data-target="#pills-match" type="button" role="tab" aria-controls="pills-match" aria-selected="true">{"Match"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-h2h-tab" data-toggle="pill" data-target="#pills-h2h" type="button" role="tab" aria-controls="pills-h2h" aria-selected="false">{"H2H"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-standing-tab" data-toggle="pill" data-target="#pills-standing" type="button" role="tab" aria-controls="pills-standing" aria-selected="false">{"Standings"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-video-tab" data-toggle="pill" data-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="false">{"Video"}</button>
          </li>
        </ul>

        <div className="tab-content container" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-match" role="tabpanel" aria-labelledby="pills-match-tab">
            <Match />
          </div>
          <div className="tab-pane fade" id="pills-h2h" role="tabpanel" aria-labelledby="pills-h2h-tab">
            <H2H />

          </div>
          <div className="tab-pane fade" id="pills-standing" role="tabpanel" aria-labelledby="pills-standing-tab">
            <Standings />
          </div>
          <div className="tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
            <Videos />
          </div>
        </div>
      </div>

    </div>
  )
}

export default MatchDetails
