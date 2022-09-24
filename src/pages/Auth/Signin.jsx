import React from 'react'
import { Link } from 'react-router-dom'
import AuthBtn from '../../components/Button/AuthBtn'
import AuthCheckBox from '../../components/input/AuthCheckBox'
import AuthInput from '../../components/input/AuthInput'
import {input} from "../../DB"
function Signin() {
  return (
    <div className='auth signin'>
          <header>
              <h1>Welcome Back</h1>
              <p>Enter your eMail address and password to log in to Soccernity.</p>
          </header>
          

          <form>
            m
        <AuthInput input={input.email} error={false} />
        <Link to="/auth/forgot-password" className='forgotPLink'>Forgot Password?</Link>
        <AuthInput input={input.password} error={false} />
       
        <AuthCheckBox /> 
          <AuthBtn name={"Log in"}/> 
      </form>
      
       <div className="extra text-center">
          Don’t have an account? <Link to="/auth/signup">Create one here.</Link>
        </div>

    </div>
  )
}

export default Signin
