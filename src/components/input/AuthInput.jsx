import React from 'react'

const AuthInput = (props) => {
    const {name,type,preText}=props.input
    const {error}=props.error
  return (
     <div className="form-group authInput"> 
            <label htmlFor={name} >{name}</label>
                <input type={type} className="form-control" name={name} id="" aria-describedby="emailHelpId" placeholder={preText}/>
                {error && <small id="emailHelpId" className="form-text text-muted">{error}</small>}
         </div>
  )
}

export default AuthInput
