import React from 'react'
import { FilterByLeague as data } from "../../../DB";


const FilterByLeague = () => {
    return (
        <div className='FilterByLeague'>
            <h4>
                Filter By League
            </h4>
            <ul>
                {data.map((item, key) =>
                    <li key={key}>
                        <img src={item.img} alt="" />
                        <span>{item.name}</span>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default FilterByLeague
