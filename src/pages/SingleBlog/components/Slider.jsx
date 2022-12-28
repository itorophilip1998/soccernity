import React from 'react'

function Slider({ article }) {
  return (
    <div className="img-Slider">
      <div id="imgSlider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {article?.images?.map((item, key) => <li data-target="#imgSlider" data-slide-to={key} className="active"></li>
          )}

        </ol>
        <div className="carousel-inner">
          {article?.images?.map((item, key) => <div className={`carousel-item ${key === 0 && 'active'}`}>
            <img src={item?.url} className="d-block w-100" alt="..." />
          </div>)}
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
