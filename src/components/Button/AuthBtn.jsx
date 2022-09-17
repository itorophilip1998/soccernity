import React from 'react'

const AuthBtn = ({name}) => { 
    console.log(name)
  return (
     <div className="form-group authButton"> 
          <button className="btn form-control">{name}</button>
         </div>
  )
}

export default AuthBtn
