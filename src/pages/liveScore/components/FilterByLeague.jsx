
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// /**/
const FilterByLeague = () => {
    const data = useSelector((state) => state.livescores?.leagues)
    const [search, setSearch] = useState()

    return (
        <div className='FilterByLeague'>
            <div className="seach-bar">
                <img src="/images/search2.png" className="search" alt="" />
                <input type="" placeholder='Search League' onChange={(e) => setSearch(e.target.value)} />

            </div>
            <div className="sortByleague">
                <h4>
                    Sort By League
                </h4>

                <ul>
                    {
                        data?.filter((input) =>
                            (input?.league?.name?.toLowerCase().match(search)))?.slice(0, 5)?.map((item, key) =>
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

            <div className="sortByCountry ">
                <h4 className='mt-5'>
                    Sort By Countries
                </h4>

                <div className="searchByloaders">
                    {
                        data?.filter((input) =>
                            (input?.league?.name?.toLowerCase()?.match(search)))?.map((item, key) =>
                                <div key={key} >
                                    <p>
                                        <a class="btn btn-primary" data-toggle="collapse" href="#contentId" aria-expanded="false" aria-controls="contentId">
                                            Show
                                        </a>
                                    </p>
                                    <div class="collapse" id="contentId">
                                        loream
                                    </div>

                                </div>

                            )}
                </div>

            </div>
        </div>
    )
}

export default FilterByLeague
