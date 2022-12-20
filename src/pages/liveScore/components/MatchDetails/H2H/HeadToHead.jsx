import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getH2H } from '../../../../../store/LiveScores/Matches'

/*eslint-disable*/
const HeadToHead = ({away,home}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getH2H({ h2h: `${home}-${away}` }))
  }, [])
  const [slice, setSlice] = useState(6)

  const h2h = useSelector((state) => state.livescores?.h2h);
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
        HEAD TO HEAD
      </div>
      {h2h?.slice(0, slice)?.map((item, key) => <div className="h2h-lineup row m-0">
        <div className="fcol " key={key}>
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

      </div>)}
      {h2h?.length >= 6 && <div className="seeMore" onClick={() => seSliceFunc()}>
        < span > {h2h?.length > slice ? "See More " : "See Less "}</span> <img src="/images/seemore.png" className={h2h?.length > slice ? "SeeMore " : "SeeLess"} alt="" />
      </div>}
    </div >
  )
}

export default HeadToHead
