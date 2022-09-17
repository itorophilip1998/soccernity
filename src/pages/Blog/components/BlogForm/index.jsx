import React from 'react'

function BlogForm() {
  return (
      <div className='blogForm'>
          <h4>Join the discussion</h4>
          <hr />
          <form >
              <div className="form-group"> 
                  <div className="row m-0">
                      <div className="col-8 p-0">
                             <input type="email"  className="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email"/>
                          
                      </div>
                      <div className="col-4">
                          <div className="img">
                                <span>Login via: </span>
                          <img src="/images/facebook.png" alt="" />
                          <img src="/images/google.png" className='google' alt="" />
                          <img src="/images/twitter.png" alt="" />
                      </div>
              </div>
                  </div>
                {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
              </div> 
                  <div className="form-group">  
                    <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Enter your message here'></textarea>
                {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
              </div>
              <div className="form-group">  
                <button className="btn">Comment</button>
             </div>
          </form>
      
    </div>
  )
}

export default BlogForm
