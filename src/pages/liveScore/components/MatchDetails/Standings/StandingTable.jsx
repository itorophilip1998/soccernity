import React from 'react'

function StandingTable({ standing }) {
    console.log(standing[0]?.league?.standings[0])
    return (
        <table className="table table-borderless ">
            <thead >
                <tr >
                    <th >TEAM</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>G</th>
                    <th>PTS</th>
                    <th>FORM</th>
                </tr>
            </thead>
            <tbody>
                {standing[0]?.league?.standings[0]?.map((item, key) =>
                    <tr key={key}>
                        <td className='text-left'>
                            {item?.description === "Promotion - Champions League (Group Stage)" && <div className="numCount promoteda">{item?.rank}.</div>}
                            {item?.description === "Promotion - Europa League (Group Stage)" && <div className="numCount promotedb">{item?.rank}.</div>}
                            {!item?.description && <div className="numCount normal">{item?.rank}.</div>}
                            {item?.description === "Relegation - Championship" && <div className="numCount relegation">{item?.rank}.</div>}
                            <img src={item?.team?.logo} alt="" />
                            <span className="name">{item?.team?.name}</span>
                        </td>
                        <td>{item?.all?.played}</td>
                        <td>{item?.all?.win}</td>
                        <td>{item?.all?.draw}</td>
                        <td>{item?.all?.lose}</td>
                        <td>{item?.all?.goals?.for}</td>
                        <td>{item?.points}</td>
                        <td>

                            <div className={`numCount ${item?.form?.split("")[0]}`}>{item?.form?.split("")[0]}</div>
                            <div className={`numCount ${item?.form?.split("")[1]}`}>{item?.form?.split("")[1]}</div>
                            <div className={`numCount ${item?.form?.split("")[2]}`}>{item?.form?.split("")[2]}</div>
                            <div className={`numCount ${item?.form?.split("")[3]}`}>{item?.form?.split("")[3]}</div>
                            <div className={`numCount ${item?.form?.split("")[4]}`}>{item?.form?.split("")[4]}</div>

                        </td>
                    </tr>

                )}


            </tbody>
        </table>
    )
}

export default StandingTable
