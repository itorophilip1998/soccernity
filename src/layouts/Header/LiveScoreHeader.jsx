import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { nav } from "../../DB"

const LiveScoreHeader = () => {
    const [isHover, setisHover] = useState(0)
    const handleLink = (key) => setisHover(key)
    return (
        <div className='livescoreHeader py-5'>
            <nav className="navbar navbar-expand-md navbar-light ">

                <div className="container">
                    <Link className="navbar-brand ml-0" to="#">
                        <img src="/logo.png" alt="" className='logoImg' />
                        <span className='logoName'>Soccernity</span>
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                            <li className="nav-item"  >
                                <Link to="/" className={`nav-link `} >
                                    Scores
                                </Link>
                            </li>
                            <li className="nav-item"  >
                                <Link to="/blog" className={`nav-link `} >
                                    Blog <img src="/images/link.png" alt="" />
                                </Link>
                            </li>

                        </ul>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                            <li className="nav-item"  >
                                <Link to="/auth/signin" className={`nav-link `} >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item"  >

                                <img src="/images/theme.png" alt="" />

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default LiveScoreHeader
