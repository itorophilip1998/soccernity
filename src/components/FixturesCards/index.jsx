import React from 'react'

const FixturesCards = ({ item }) => {
    return (
        <div className='fixturesCards'>
            <div className="elapse">
                {"‘"}{(item?.fixture?.status.short === "HT") ? "HT" : item?.fixture?.status?.elapsed}
            </div>
            <div className="matches">
                <div className="home text-right">
                    <span className="name">{item?.teams?.home?.name.slice(0, 12)}</span>
                    <img src={item?.teams?.home?.logo} alt="" />

                </div>
                <div className="scores ">
                    
                    <span className="goals">{item?.goals?.home}</span>
                    {"-"}
                    <span className="goals">{item?.goals?.away}</span>

                </div>
                <div className="away ">
                    <img src={item?.teams?.away?.logo} alt="" />
                    <span className="name">{item?.teams?.away?.name.slice(0,12)}</span>
                </div>
            </div>
        </div>
    )
}

export default FixturesCards 