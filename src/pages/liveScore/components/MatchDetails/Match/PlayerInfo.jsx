
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../../../../../store/LiveScores/Matches';

const PlayerInfo = ({ item }) => {
    const dispatch = useDispatch
    const player = useSelector((state) => state.livescores.player);
    // const country = useSelector((state) => state.livescores.country);
    // const flag = country?.find((name) => player?.player?.nationality === name?.name);
    // useEffect(() => {
    dispatch(getCountry({ name: player?.player?.nationality }))
    // }, [])
    return (
        <div className="modal-dialog playerInfo" role="document">
            <div className="modal-content modal-sm">
                <div className="modal-header">
                    <h5 className="modal-title">{item?.name} {item?.number && <b>({item?.number})</b>}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="container-fluid  text-center">
                        <div className="img">
                            <img src={player?.player?.photo} alt="" />
                        </div>
                        <div className="py-4">

                            <div className="data py-2">
                                <span className="ask">Age : </span>
                                <span className="ans">{player?.player?.age}</span>
                            </div>
                            <div className="data py-2">
                                <span className="ask">Height : </span>
                                <span className="ans">{player?.player?.height}</span>
                            </div>
                            <div className="data py-2">
                                <span className="ask">Weight : </span>
                                <span className="ans">{player?.player?.weight}</span>
                            </div>
                            <div className="data py-2">
                                <span className="ask">Nationality : </span>
                                <span className="ans">{player?.player?.nationality}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlayerInfo
