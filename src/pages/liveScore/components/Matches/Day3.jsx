import React from 'react'
import { useSelector } from 'react-redux'
import FixturesCards from '../../../../components/FixturesCards'

const Day3 = () => {
  const data = useSelector((state) => state.livescores?.day3)
  return (
    <div>
      {data && data.map((item, key) =>
        <FixturesCards item={item} key={key} array="day3" />
      )}
    </div>
  )
}

export default Day3