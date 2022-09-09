import React,{useState} from 'react';
import { Link } from "react-router-dom"
import { nav } from "../../DB"

export default function Header() { 
  const [isHover, setisHover] = useState(0) 
  const handleLink=(key)=>setisHover(key)
  
  return (
    <header> 

      <nav class="navbar navbar-expand-md navbar-light ">
   
        <div className="container">
            <Link class="navbar-brand ml-0" to="#"><div className="logo"></div></Link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0"> 
            {nav.map((item, key) =>
                <li class="nav-item"   key={key} >
                  <Link class="nav-link" to={item.link} onClick={()=>handleLink(key)} className={isHover===key?"isactive":''} > {item.name}</Link>
                </li> 
              )}

          
          </ul>
          
        </div>
        </div>
      
      </nav>
    </header>
  );
}
