import React,{useState} from 'react';
import { Link } from "react-router-dom"
import { nav } from "../../DB"

export default function Header() { 
  const [isHover, setisHover] = useState(0) 
  const handleLink=(key)=>setisHover(key)
  
  return (
    <header > 

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
            {nav.map((item, key) =>
                <li className="nav-item"   key={key} >
                  <Link  to={item.link} onClick={()=>handleLink(key)} className={`nav-link `} > {item.name}</Link>
                </li> 
              )}
 
          </ul>
          
        </div>
        </div>
      
      </nav>
    </header>
  );
}
