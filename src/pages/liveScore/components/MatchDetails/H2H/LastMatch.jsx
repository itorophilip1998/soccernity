import moment from 'moment'
import React, { useState } from 'react'
/*eslint-disable*/
const LastMatch = ({ lastMatch, team }) => {

  const [slice, setSlice] = useState(6)
  const isStatus = (home, away) => {
    if (home > away) {
      return "W";
    }
    else if (home < away) {
      return "L";

    }
    else if (home === null && away === null) {
      return "C";

    }
    else if (home == away) {
      return "D";
    } else {
      return "C";

    }
  }

  const seSliceFunc = () => {
    if (lastMatch?.length > slice) {
      setSlice(slice + 6)
    } else {
      setSlice(6)
    }
  }

  return (
    <div className='h2h'>
      <div className="plank text-uppercase ">
        LAST MATCHES: <span className='headText text-dark pl-1'>{team}</span>
      </div>
      {lastMatch?.slice(0, slice)?.map((item, key) => <div className="h2h-lineup row m-0">
        <div className="fcol" key={key}>
          <span className="date mr-3">{moment(item?.date).format("DD-MM-YY HH:mm")}</span>
          <img src={item?.league?.flag} alt="" />
          <span className="league mx-3">{item?.league?.name?.slice(0, 7)}{item?.league?.name?.length > 7 && "..."}</span>
        </div>

        <div className="clubH2H row m-0">
          <div className="away col-12">
            <img src={item?.teams?.home?.logo} alt="" />
            <span className="clubname home">{item?.teams?.home?.name}</span>
            <span className="goal">{item?.goals?.home ?? '-'}</span>
          </div>
          <div className="home col-12">
            <img src={item?.teams?.away?.logo} alt="" />
            <span className="clubname">{item?.teams?.away?.name}</span>
            <span className="goal ">{item?.goals?.away ?? "-"}</span>
          </div>
        </div>
        <div className="lastcol">
          <div className={`textstatus ${isStatus(item?.goals?.home, item?.goals?.away)} shadow`}>
            {isStatus(parseInt(item?.goals?.home), parseInt(item?.goals?.away))}
          </div>
        </div>
      </div>)}

      {lastMatch?.length >= 6 && <div className="seeMore" onClick={() => seSliceFunc()}>
        {lastMatch?.length > slice ? "See More " : "See Less"}<img src="/images/seemore.png" alt="" />
      </div>
      }
    </div>
  )
}

export default LastMatch
