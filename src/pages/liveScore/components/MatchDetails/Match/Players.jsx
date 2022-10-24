import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getPlayer } from '../../../../../store/LiveScores/Matches'
import PlayerInfo from './PlayerInfo'

export const HomePlayers = ({ item }) => {
    const dispatch = useDispatch()

    const LoadPlayers = (item) => {
        dispatch(getPlayer({ id: item, season: moment().format("YYYY") }))
    }
    return (
        <li className='home' onClick={() => LoadPlayers(item?.player?.id)} data-toggle="modal" data-target={`#playerInfo${item?.player?.id}`} >
            <div class="modal fade" id={`playerInfo${item?.player?.id}`} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <PlayerInfo item={item?.player} />
            </div>
            <span className="number" >{item?.player?.number} </span>
            <img src="/images/jaycee.png" alt="" />
            <span className="name">{item?.player?.name} </span>
        </li>

    )
}
export const AwayPlayers = ({ item }) => {
    const dispatch = useDispatch()

    const LoadPlayers = (item) => {
        dispatch(getPlayer({ id: item, season: moment().format("YYYY") }))
    }
    return (
        <li className='away' onClick={() => LoadPlayers(item?.player?.id)} data-toggle="modal" data-target={`#playerInfo${item?.player?.id}`}>
            <div class="modal fade" id={`playerInfo${item?.player?.id}`} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <PlayerInfo item={item?.player} />
            </div>
            <span className="name">{item?.player?.name} </span>
            <img src="/images/jaycee.png" alt="" />
            <span className="number">{item?.player?.number} </span>

        </li>

    )
}
export const HomeCoach = ({ item }) => {
    return (
        <li className='home' data-toggle="modal" data-target={`#playerInfo${item?.id}`}>
            <div class="modal fade" id={`playerInfo${item?.id}`} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <PlayerInfo item={item} isCoach={true} />

            </div>
            <img src="/images/jaycee.png" alt="" />
            <span className="name">{item?.name} </span>
        </li>

    )
}
export const AwayCoach = ({ item }) => {
    return (
        <li className='away' data-toggle="modal" data-target={`#playerInfo${item?.id}`}>
            <div class="modal fade" id={`playerInfo${item?.id}`} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <PlayerInfo item={item} isCoach={true} />
            </div>
            <span className="name">{item?.name} </span>
            <img src="/images/jaycee.png" alt="" />
        </li>

    )
} 