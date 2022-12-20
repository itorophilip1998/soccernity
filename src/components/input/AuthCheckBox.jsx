import React from 'react'

const AuthCheckBox = () => { 
  return (
    <div className="form-group checkboxAuth"> 
      <label htmlFor="signin" className='checkboxLabel'>
          <input type="checkbox" className='link'  name="signin" id="signin" aria-describedby="emailHelpId" />
        
       <span> Stay signed in.</span> </label> 
         </div>
  )
}

export default AuthCheckBox
