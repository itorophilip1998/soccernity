import React from 'react'
import { useSelector } from 'react-redux'
import FixturesCards from '../../../../components/FixturesCards'

const Day2 = () => {
  const data = useSelector((state) => state.livescores?.day2)
  return (
    <div>
      {data && data.map((item, key) =>
        <FixturesCards item={item} key={key} />
      )}
    </div>
  )
}

export default Day2