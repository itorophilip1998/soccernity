import React, { useState } from 'react'
import Hero from '../Blog/components/Hero'

function Contact() {
  const [data, setData] = useState()
  return (
    <div className='contact '>
      <Hero />
      <h2 className='conTxt'>Contact Us</h2>
      <form   >
        <div className="container py-5 col-xl-6 col-md-10 mx-auto">
          <div className="form-group">
            <input type="text" className="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Name" />
            {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email" />
            {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="form-group" onChange={(e) => setData(e.target.value)}>
            <select name="" id="" className='form-control'>
              <option >Technical issues</option>
              <option >Editorial Complaints</option>
              <option >Data / Livescores Issues</option>
              <option >Suggestions</option>
              <option >Enquiries/Feedback</option>
              <option >Others</option>

            </select>
            {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
          </div>
          {data === "Others" && <div className="form-group">
            <input type="text" className="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Subject" />
            {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
          </div>}

          <div className="form-group">
            <textarea name="" id="" cols="30" rows="5" className='form-control contactInput' placeholder='Enter your message here'></textarea>
            {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="form-group mb-0  text-center">
            <button className='loadMore-btn'>Submit</button>

          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
