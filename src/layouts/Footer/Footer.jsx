import React from 'react' 
import { Link } from 'react-router-dom'
import {footer} from "../../DB"
function Footer() {
  return (
    <footer>
      <div className="logo">
         
      </div>
      <div className="footerLinks">
        {footer.map((item, key) => (<Link to={item.link}>
          {item.name}
          <div className="dot"></div>
        </Link>))}
     </div>
      <div className="copyright">
        Copyright © 2022 Soccernity All rights reserved. The information contained in Soccernity may not be published, broadcast, rewritten, or redistributed without the prior written authority of Soccernity
      </div>
    </footer>
  )
}

export default Footer
