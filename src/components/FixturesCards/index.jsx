import React from 'react'

const FixturesCards = ({ item }) => {
    return (
        <div className='fixturesCards'>
            <div className="elapse">
                {"‘"}{(item?.fixture?.status.short === "HT") ? "HT" : item?.fixture?.status?.elapsed}
            </div>
            <div className="matches">
                <div className="home">
                    <span className="name">{item?.teams?.home?.name}</span>
                    <img src={item?.teams?.home?.logo} alt="" />
                    <span className="goals">{item?.goals?.home}</span>

                </div>
                <div className="vs">{"-"}</div>
                <div className="away">
                    <span className="goals">{item?.goals?.away}</span>
                    <img src={item?.teams?.away?.logo} alt="" />
                    <span className="name">{item?.teams?.away?.name}</span>
                </div>
            </div>
        </div>
    )
}

export default FixturesCards 