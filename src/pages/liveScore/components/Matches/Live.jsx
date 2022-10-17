import React from 'react'
import { useSelector } from 'react-redux'
import FixturesCards from '../../../../components/FixturesCards'

const Live = () => {
    const data = useSelector((state) => state.livescores?.live)
    return (
        <div>
            {data && data.map((item, key) =>
                <FixturesCards item={item} key={key} array="live" />
            )}
        </div>
    )
}

export default Live
