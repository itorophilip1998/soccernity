import React from 'react'

export const HomePlayers = ({ item }) => {
    return (
        <li className='home'>

            <span className="number">{item?.player?.number} </span>
            <img src="/images/jaycee.png" alt="" />
            <span className="name">{item?.player?.name} </span>
        </li>

    )
}
export const AwayPlayers = ({ item }) => {
    return (
        <li className='away'>
            <span className="name">{item?.player?.name} </span>
            <img src="/images/jaycee.png" alt="" />
            <span className="number">{item?.player?.number} </span>

        </li>

    )
} 