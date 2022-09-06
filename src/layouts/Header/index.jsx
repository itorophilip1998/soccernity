import React from 'react';
import { Link } from "react-router-dom"
import {nav} from "../../DB"
export default function Header() { 

  return (
    <header> 
      <div className="logo">
        Logo
      </div>
      <nav >
        {nav.map(({ link,name }, key) => <Link key={key} to={link}>{name}</Link> )}
      </nav> 
    </header>
  );
}
