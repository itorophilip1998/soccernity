import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from "../../../../DB"
function Categories() {
  const [isFocus, setisFocus] = useState("All")
  return (
    <div>
      <section id="categories">
        {categories.map((item, key) =>
          <Link to={`#`} key={key}
            className={item === isFocus ? 'isFocus' : ""}
            onClick={() => setisFocus(item)}>
            {item}
          </Link>
        )}
      </section>

      <h1 className='trendingTopic'>{isFocus === "All" ? 'Top Stories' : isFocus}</h1>

    </div>
  )
}

export default Categories
