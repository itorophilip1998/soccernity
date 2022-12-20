import React from 'react'
import { useLocation } from 'react-router-dom'
import HeroInput from '../HeroInput'

function Hero() {
  const location = useLocation()
  const isCurrent = location.pathname;
  return (
    <section id="hero" className='container-fluid'>
      <h1>Feel The Passion, Enjoy the Game.</h1>
      {(isCurrent !== '/contact' &&
        isCurrent !== '/terms' &&
        isCurrent !== '/policy'
      ) && <HeroInput />}
    </section>
  )
}

export default Hero
