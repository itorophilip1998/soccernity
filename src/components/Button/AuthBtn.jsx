import React from 'react'

const AuthBtn = ({name}) => { 
  return (
     <div className="form-group authButton"> 
          <button className="btn">{name}</button>
         </div>
  )
}

export default AuthBtn
