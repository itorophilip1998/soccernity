import React from 'react'
import { Link } from 'react-router-dom'
import {categories} from "../../../../DB"
function index() {
  return (
    <section id="categories">
          {categories.map((item, key) =>
              <Link to={`#`} key={key}>{item}</Link>
          )}
    </section>
  )
}

export default index
