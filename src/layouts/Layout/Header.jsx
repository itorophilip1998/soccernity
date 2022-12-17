import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navlinks } from "../../DB"
import Inbox from '../../pages/Chats/inbox'
import { signoutReq } from '../../utils/request'
function Header() {
  const route = useLocation().pathname
  const loaderInfo = (url) => {
    if (url === '/') {
      window.location.href = url
    }
  }
  const [isInbox, setisInbox] = useState(false)
  const token = useSelector((state) => state.general?.token)
  const navigate = useNavigate()
  return (
    <div className='header mb-header'>
      <nav className="navbar navbar-expand-sm navbar-light shadow fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/nav/logo.png" className="nav-logo" alt="" />
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <img src="/images/nav/search.png" className='search' alt="" />
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
          </form>


          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-white" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {navlinks?.map((item, key) => <li key={key} className="nav-item  active">
                <Link className="nav-link" to={item?.url} onClick={() => loaderInfo(item?.url)} >
                  {item?.url === route && <img src={item?.hover_icon} alt="" />}
                  {item?.url !== route && <img src={item?.icon} alt="" />}
                </Link>
              </li>)}
            </ul>
            <form className="form-inline second-nav my-2 my-lg-0">
              {token ? <span>
                <img src="/images/nav/notify.png" alt="" className="topImg-header" />
                <img src="/images/nav/msg.png" alt="" onClick={() => setisInbox(!isInbox)} className="topImg-header" />
                <img src="/images/nav/profile.png" alt="" className="topImg-header"
                  id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false" />


                <div class="dropdown">
                  <div class="dropdown-menu" aria-labelledby="triggerId">
                    <Link class="dropdown-item" to="/profile?user=itorophilip">Profile</Link>
                    <button class="dropdown-item" onClick={() => signoutReq()} >Logout</button>
                  </div>
                </div>
              </span>
                :
                <button className='isloggesIN' onClick={() => navigate('/auth/signin')}>
                  Login
                </button>}

              {isInbox && <Inbox />}
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
