import React from 'react'
import moment from "moment"
// import { useNavigate } from 'react-router-dom'
const FixturesCards = ({ item, array }) => {
    // const navigate = useNavigate();  
    const navigate = (link) => {
        window.location.href = link
    }
    return (
        <div>

            <div className='fixturesCards' onClick={() => navigate(`/match-details?id=${item?.fixture?.id}&array=${array}`)}>
                <div className="elapse">
                    {item?.fixture?.status?.elapsed ? <span>
                        {"‘"}{(item?.fixture?.status.short === "HT") ? "HT" : item?.fixture?.status?.elapsed}
                    </span> :

                        moment(item?.fixture?.date).format("HH:MM")

                    }
                </div>
                <div className="matches pl-4">
                    <div className="home text-right">
                        <span className="name">{item?.teams?.home?.name.slice(0, 12)}</span>
                        <img src={item?.teams?.home?.logo} alt="" />

                    </div>
                    <div className="scores ">

                        <span className="goals">{item?.goals?.home ? item?.goals?.home : 0}</span>
                        <span>{"-"}</span>
                        <span className="goals">{item?.goals?.away ? item?.goals?.away : 0}</span>

                    </div>
                    <div className="away ">
                        <img src={item?.teams?.away?.logo} alt="" />
                        <span className="name">{item?.teams?.away?.name.slice(0, 12)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixturesCards 