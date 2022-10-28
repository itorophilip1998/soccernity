import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAwayLastMatch, getHomeLastMatch } from '../../../../../store/LiveScores/Matches'
import HeadToHead from './HeadToHead'
import LastMatch from './LastMatch'
/* eslint-disable*/
const query = new URLSearchParams(window.location.search);
const id = query.get("id");
const array = query.get("array");

const H2H = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeLastMatch({ team: '19764' }))
    dispatch(getAwayLastMatch({ team: '16809' }))
  }, [])
  const lastXhome = useSelector((state) => state.livescores?.lastXhome);
  const lastXaway = useSelector((state) => state.livescores?.lastXaway);
  const scores = useSelector((state) => state.livescores?.[array]);
  const match = scores?.find((data) => data?.fixture?.id === parseInt(id)) 
  return (
    <div>
      <LastMatch lastMatch={lastXhome} team={match?.teams?.home?.name} />
      <LastMatch lastMatch={lastXaway} team={match?.teams?.away?.name} />
      <HeadToHead />
    </div>
  )
}

export default H2H


