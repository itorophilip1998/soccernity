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
  const dispatch = useDispatch();
  const scores = useSelector((state) => state.livescores?.[array]);
  const match = scores?.find((data) => data?.fixture?.id === parseInt(id))
  console.log(match)

  useEffect(() => {
    dispatch(getHomeLastMatch({ team: match?.teams?.home?.id }))
    dispatch(getAwayLastMatch({ team: match?.teams?.away?.id }))
  }, [])
  const lastXhome = useSelector((state) => state.livescores?.lastXhome);
  const lastXaway = useSelector((state) => state.livescores?.lastXaway);
  return (
    <div>
      <LastMatch lastMatch={lastXhome} team={match?.teams?.home?.name} />
      <LastMatch lastMatch={lastXaway} team={match?.teams?.away?.name} />
      <HeadToHead home={match?.teams?.home?.id} away={match?.teams?.away?.id} />
    </div>
  )
}

export default H2H


