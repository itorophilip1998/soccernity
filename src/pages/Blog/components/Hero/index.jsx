import React from 'react'
import { useLocation } from 'react-router-dom'
import HeroInput from '../HeroInput'

function Hero() {
  const location = useLocation()
  const isCurrent = location.pathname; 
  return (
    <section id="hero" className='container'>
          <h1>Feel The Passion, Enjoy the Game.</h1>
         {isCurrent!=='/contact' && <HeroInput/>}
    </section>
  )
}

export default Hero
