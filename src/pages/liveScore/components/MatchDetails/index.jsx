// import moment from 'moment'
import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import H2H from './H2H';
import Match from './Match';
import Standings from './Standings';
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
        time = "HALF TIME"
        break;
      case "FT":
        time = "FULL TIME"

        break;
      case "1H":
        time = "FIRST HALF"

        break;
      case "2H":
        time = "SECOND HALF"
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
            <h6 className='textTop'> {moment(data?.fixture?.date).format("DD - MM - YY")}<span className='ml-3'> {moment(data?.fixture?.date).format("hh:mm")}</span></h6>
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
            <button className="nav-link " id="pills-match-tab" data-toggle="pill" data-target="#pills-match" type="button" role="tab" aria-controls="pills-match" aria-selected="true">{"Match"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="pills-h2h-tab" data-toggle="pill" data-target="#pills-h2h" type="button" role="tab" aria-controls="pills-h2h" aria-selected="false">{"H2H"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-standing-tab" data-toggle="pill" data-target="#pills-standing" type="button" role="tab" aria-controls="pills-standing" aria-selected="false">{"Standings"}</button>
          </li>
          <li className="nav-item" role="presentation">
            <a href={`https://www.youtube.com/results?search_query=Highlight of ${data?.teams?.home?.name} vs ${data?.teams?.away?.name} of ${moment(data?.fixture?.date).format("DD/MM/YYYY")}`} target="_blank" rel='noreferrer' className="nav-link" id="pills-video-tab" type="button" role="tab" aria-controls="pills-video" aria-selected="false">{"Video"}</a>
          </li>
        </ul>

        <div className="tab-content container" id="pills-tabContent">
          <div className="tab-pane fade  " id="pills-match" role="tabpanel" aria-labelledby="pills-match-tab">
            <Match />
          </div>
          <div className="tab-pane fade " id="pills-h2h" role="tabpanel" aria-labelledby="pills-h2h-tab">
            <H2H />

          </div>
          <div className="tab-pane fade show active" id="pills-standing" role="tabpanel" aria-labelledby="pills-standing-tab">
            <Standings />
          </div>

        </div>
      </div>

    </div>
  )
}

export default MatchDetails
