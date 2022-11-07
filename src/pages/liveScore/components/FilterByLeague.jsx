
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// /**/
const FilterByLeague = () => {
    const leagues = useSelector((state) => state.livescores?.leagues)
    const country = useSelector((state) => state.livescores?.country)
    const [search, setSearch] = useState()
    const [imgRotate, setimgRotate] = useState(false)
    const [isKey, setisKey] = useState()


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
                        leagues?.filter((input) =>
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
                        country?.filter((input) =>
                            (input?.name?.toLowerCase()?.match(search)))?.map((item, key) =>
                                <p key={key} className="countryBox">
                                    <a onClick={() => { setimgRotate(!imgRotate); setisKey(key) }} class="countryLinks" data-toggle="collapse" href={`#content${key}`} aria-expanded="true" aria-controls={`#content${key}`}>
                                        <span>{item?.name}</span> <img src={"/images/caret.png"} className={`caret ${key === isKey && imgRotate ? 'img-rotate' : ''}`} alt="" />
                                    </a>

                                    <div class="collapse" id={`content${key}`} >

                                        {leagues?.filter((input) =>
                                            (input?.country?.name?.match(item?.name)))?.map((list, key) =>
                                                <Link to={"#"} class="countryLinks" >
                                                    <span key={key}>
                                                        {list?.league?.name}
                                                    </span>
                                                </Link>

                                            )}

                                    </div>

                                </p>

                            )}
                </div>

            </div>
        </div>
    )
}

export default FilterByLeague
