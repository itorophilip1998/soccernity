import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='AuthLayout'>
          <div className="row m-0">
              <div className="col-md-6 contentBox"> 
                    <Link className="navbar-brand ml-0" to="#">
                    <img src="/logo.png" alt="" className='logoImg' />
                    <span className='logoName'>Soccernity</span>
                    </Link> 
                  <main  >
                      <Outlet/>
                  </main>
              </div>
              <div className="col-md-6 p-0 img_bg">
                  
              </div>
         </div>
    </div>
  )
}

export default AuthLayout
