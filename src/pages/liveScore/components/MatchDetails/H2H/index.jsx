import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAwayLastMatch, getHomeLastMatch } from '../../../../../store/LiveScores/Matches'
import HeadToHead from './HeadToHead'
import LastMatch from './LastMatch'
/* eslint-disable*/
const H2H = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeLastMatch({ team: '19764' }))
    dispatch(getAwayLastMatch({ team: '16809' }))
  }, [])
  const lastXhome = useSelector((state) => state.livescores?.lastXhome);
  const lastXaway = useSelector((state) => state.livescores?.lastXaway);
  return (
    <div>
      <LastMatch lastMatch={lastXhome} team={lastXhome[0]?.teams?.home?.name} />
      <LastMatch lastMatch={lastXaway} team={lastXaway[0]?.teams?.home?.name} />
      <HeadToHead />
    </div>
  )
}

export default H2H


