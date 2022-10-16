import React from 'react'
import { useSelector } from 'react-redux'
import FixturesCards from '../../../../components/FixturesCards'

const Today = () => {
  const data = useSelector((state) => state.livescores?.today)
  return (
    <div>
      {data && data.map((item, key) =>
        <FixturesCards item={item} key={key} array="today" />
      )}
    </div>
  )
}

export default Today
