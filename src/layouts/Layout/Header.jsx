import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navlinks } from "../../DB"
function Header() {
  const route = useLocation().pathname
  const loaderInfo = (url) => {
    if (url === '/') {
      window.location.href = url
    }
  }
  return (
    <div className='header mb-header'>
      <nav className="navbar navbar-expand-sm navbar-light shadow fixed-top">
        <div className="container">
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
              <span>
                <img src="/images/nav/notify.png" alt="" />
                <img src="/images/nav/msg.png" alt="" />
                <img src="/images/nav/profile.png" alt="" />
              </span>
              {/* <button className='isloggesIN'>
                Login
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
