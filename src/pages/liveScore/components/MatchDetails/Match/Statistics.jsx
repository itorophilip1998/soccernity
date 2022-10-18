import React from 'react'
import ListStat from '../../../../../components/Matches/ListStat'

function Statistics() {
  // const query = new URLSearchParams(window.location.search);
  // const id = query.get("id");
  // const array = query.get("array");
  // const dispatch = useDispatch()
  // const match_summary = useSelector((state) => state.livescores.match_summary);
  // const away_id = window.localStorage.getItem("away")
  // useEffect(() => {
  //   dispatch(getEvents(id))
  // }, [])
  // const scores = useSelector((state) => state.livescores?.[array]);
  // const summarry = scores?.find((data) => data?.fixture?.id === parseInt(id))
  // const firsthalf = moment(summarry?.fixture?.periods?.first).format("mm")
  // const secondhalf = moment(summarry?.fixture?.periods?.second).format("mm")

  return (
    <div className='statistics'>
      <div className="plank ">
        <a href="#all">MATCH</a>
        <a href="#first_half">FIRST HALF</a>
        <a href="#second_half">SECOND HALF</a>
      </div>


      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />
      <ListStat />

    </div>
  )
}

export default Statistics
