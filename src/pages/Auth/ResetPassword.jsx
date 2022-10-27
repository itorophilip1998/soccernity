import React from 'react'
import { Link } from 'react-router-dom'
import AuthBtn from '../../components/Button/AuthBtn' 
import AuthInput from '../../components/input/AuthInput'
import {input} from "../../DB"
function ResetPassword() {
  return (
    <div className='auth signin'>
          <header>
              <h1>Reset Password</h1>
              <p>Choose a new secure password.</p>
          </header>
          

          <form>
          <AuthInput input={input.password} error={false}/> 
          <AuthInput input={input.confirmPassword} error={false}/> 
        
          <AuthBtn name={"Reset!"}/> 
      </form>
      
       <div className="extra text-center">
         Return to <Link to="/auth/signin">Login! </Link>
        </div>

    </div>
  )
}

export default ResetPassword
