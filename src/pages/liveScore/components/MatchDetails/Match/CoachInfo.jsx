
import React from 'react'
import { useSelector } from 'react-redux';
/*eslint-disable*/

const CoachInfo = ({ item, isCoach }) => {
    const coach = useSelector((state) => state.livescores.coach).slice(-1)[0]
    console.log(coach)
    return (
        <div className="modal-dialog playerInfo" role="document">
            <div className="modal-content shadow">
                <div className="modal-header">
                    <h5 className="modal-title">{item?.name} {item?.number && <b>({item?.number})</b>}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>
                <div className="modal-body">
                    <div className="container-fluid  text-center">

                        <div className="img">
                            <img src={coach?.photo} alt="" />
                        </div>
                        <div className="py-4">
                            <div className="data py-2">
                                <span className="ask">Age : </span>
                                <span className="ans">{coach?.age ?? '-'}</span>
                            </div>
                            <div className="data py-2">
                                <span className="ask">Height : </span>
                                <span className="ans">{coach?.height ?? '-'}</span>
                            </div>
                            <div className="data py-2">
                                <span className="ask">Weight : </span>
                                <span className="ans">{coach?.weight ?? '-'}</span>
                            </div>
                            <div className="data py-2">
                                <span className="ask">Nationality : </span>
                                <span className="ans">{coach?.nationality ?? '-'}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoachInfo
