import React from 'react'
import { useSelector } from 'react-redux';


const FilterByLeague = () => {
    const data = useSelector((state) => state.livescores?.leagues)

    return (
        <div className='FilterByLeague'>

            <h4>
                Filter By League
            </h4>
            <ul>
                {data.map((item, key) =>
                    <li key={key}>
                        <div className="img-liner">
                            <img src={item?.league?.logo} alt="" />
                        </div>
                        <span>{item?.league?.name}</span>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default FilterByLeague
