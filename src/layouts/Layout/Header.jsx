import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navlinks } from "../../DB"
function Header() {
  const [iskey, setIskey] = useState(null)

  return (
    <div className='header'>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/nav/logo.png" alt="" />
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
          </form>


          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

              {navlinks?.map((item, key) => <li key={key} className="nav-item active">
                <Link className="nav-link" to={item?.url} onMouseOver={() => { setIskey(key) }} onMouseOut={() => { setIskey(null) }}>
                  {iskey === key && <img src={item?.icon} alt="" />}
                  {iskey !== key && <img src={item?.icon} alt="" />}
                </Link>
              </li>)}

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <img src="/images/nav/notify.png" alt="" />
              <img src="/images/nav/msg.png" alt="" />
              <img src="/images/nav/profile.png" alt="" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
