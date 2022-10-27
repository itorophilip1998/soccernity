import React from 'react'
import { Link } from 'react-router-dom'
import AuthBtn from '../../components/Button/AuthBtn' 
import AuthInput from '../../components/input/AuthInput'
import {input} from "../../DB"
function SignUp() {
  return (
    <div className='auth signin'>
          <header>
              <h1>Register</h1>
              <p>Sign up to Soccernity.</p>
          </header>
          

      <form>
        
        <div className="row m-0">
          <div className="col-md-6 p-0 pr-md-1">
            <AuthInput input={input.firstName} error={false}/>
          </div>
          <div className="col-md-6 p-0 pl-md-1">
            <AuthInput input={input.lastName} error={false}/>
          </div>
        </div>
          <AuthInput input={input.email} error={false}/>
          <AuthInput input={input.password} error={false} /> 
 
          <div className="extra extra2 text-left ">
        By creating an account, you agree to our <Link to="/terms">Terms</Link>  and have read and acknowledge the <Link to="/policy">Privacy Policy</Link>.
        </div>
        <AuthBtn name={"Register"} /> 
        
      </form>

      <div className="extra text-center">
         Already have an account? <Link to="/auth/signin">Signin</Link>
        </div>
      
     

    </div>
  )
}

export default SignUp
