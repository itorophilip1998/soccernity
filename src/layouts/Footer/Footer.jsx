import React from 'react' 
import { Link } from 'react-router-dom'
import {footer} from "../../DB"
function Footer() {
  return (
    <footer>
      <div className="logo">
         
      </div>
      <div className="footerLinks">
        {footer.map((item, key) => (
          <Link to={item.link} key={key}>
          {item.name}
         {key!==2 && <div className="dot"></div>}
        </Link>))}
     </div>
      <div className="copyright">
        Copyright © 2022 Soccernity All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
