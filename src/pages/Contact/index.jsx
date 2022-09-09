import React from 'react'
import Hero from '../Blog/components/Hero'

function Contact() {
  return (
    <div className='contact'>
          <Hero />
          <h2 className='conTxt'>Contact Us</h2>
          <form   >
              <div class="form-group"> 
                <input type="text" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Name"/>
                {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
              </div>
              <div class="form-group"> 
                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email"/>
                {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
              </div>
              <div class="form-group"> 
                  <select name="" id="" className='form-control'>
                      <option >Technical issues</option>
                      <option >Editorial Complaints</option>
                      <option >Data / Livescores Issues</option>
                      <option >Suggestions</option>
                      <option >Enquiries/Feedback</option>
                     
                </select>
                {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
              </div>
              
              <div class="form-group">  
                  <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Enter your message here'></textarea>
                {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
              </div>
              <div className="form-group text-center">
            <button className='loadMore-btn'>Submit</button>
                  
              </div>
          </form>
    </div>
  )
}

export default Contact
