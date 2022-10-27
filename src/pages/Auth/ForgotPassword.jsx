 import React from 'react'
import { Link } from 'react-router-dom'
import AuthBtn from '../../components/Button/AuthBtn' 
import AuthInput from '../../components/input/AuthInput'
import {input} from "../../DB"
function ForgotPassword() {
  return (
    <div className='auth signin'>
          <header>
              <h1>Forgot Password</h1>
              <p>Enter the Email you registered with. We will send you instructions to recover your password.</p>
          </header>
          

          <form>
          <AuthInput input={input.email} error={false}/> 
        
          <AuthBtn name={"Verify!"}/> 
      </form>
      
       <div className="extra text-center">
         Return to <Link to="/auth/signin">Login! </Link>
        </div>

    </div>
  )
}

export default ForgotPassword
