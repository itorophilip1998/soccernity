import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const FilterByLeague = () => {
    const data = useSelector((state) => state.livescores?.leagues)


    return (
        <div className='FilterByLeague'>
            <div className="seach-bar">
                <img src="/images/search2.png" className="search" alt="" />
                <input type="" placeholder='Search League' />

            </div>
            <h4>
                Sort By League
            </h4>

            <ul>
                {data?.map((item, key) =>
                    <li key={key}>
                        {<Link to="#">
                            <div className="img-liner">
                                <img src={item?.league?.logo} alt="" />
                            </div>
                            <span>{item?.league?.name}</span>
                        </Link>
                        }
                    </li>

                )}
            </ul>

        </div>
    )
}

export default FilterByLeague
