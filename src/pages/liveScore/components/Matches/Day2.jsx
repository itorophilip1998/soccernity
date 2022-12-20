import React from 'react'
import { useSelector } from 'react-redux'
import FixturesCards from '../../../../components/FixturesCards'

const Day2 = () => {
  const data = useSelector((state) => state.livescores?.day2)
  return (
    <div>
      {data?.length ? data?.map((item, key) =>
        <FixturesCards item={item} key={key} array="today" />
      ) :

        <h5 className='text-muted text-center p-3 pt-5'>No Fixtures </h5>
      }
    </div>
  )
}

export default Day2