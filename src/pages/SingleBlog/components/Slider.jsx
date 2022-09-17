import React from 'react'

function Slider() {
  return (
    <div className="img-Slider">
      <div id="imgSlider" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#imgSlider" data-slide-to="0" className="active"></li>
    <li data-target="#imgSlider" data-slide-to="1"></li>
    <li data-target="#imgSlider" data-slide-to="2"></li>
    
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/blog1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/blog1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/blog1.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#imgSlider" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#imgSlider" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider
