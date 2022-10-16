import React from 'react'
import { useSelector } from 'react-redux'
import FixturesCards from '../../../../components/FixturesCards'

const Day1 = () => {
  const data = useSelector((state) => state.livescores?.day1)
  return (
    <div>
      {data && data.map((item, key) =>
        <FixturesCards item={item} key={key} array="day1" />
      )}
    </div>
  )
}

export default Day1