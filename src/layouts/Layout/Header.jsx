import React from 'react'

function Header() {
  return (
    <div className='header'>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img src="/images/nav/logo.png" alt="" />
          </a>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" />
          </form>


          <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              */}
            </ul>
            <form class="form-inline my-2 my-lg-0">

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
