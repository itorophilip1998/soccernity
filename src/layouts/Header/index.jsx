import React,{useState} from 'react';
import { Link } from "react-router-dom"
import { nav } from "../../DB"

export default function Header() { 
  const [isHover, setisHover] = useState(0) 
  const handleLink=(key)=>setisHover(key)
  
  return (
    <header> 
      <div className="logo">
         
      </div>
      <nav >
        {nav.map((item, key) =>
     
            <Link key={key} to={item.link} onClick={()=>handleLink(key)} className={isHover===key?"isactive":''} >
            {item.name}
            {/* {isHover===key && <img src="/images/under_line_link.png" alt="" />} */}
          </Link>
  
        )}
      </nav> 
    </header>
  );
}
