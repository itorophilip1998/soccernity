 

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { forgotPasswordReq } from '../../utils/request';
import { toast } from 'react-toastify';  

function ForgotPassword() {
  const [value, setformValue] = useState();
  const navigate = useNavigate() 
  const [error, setError] = useState(); 
  const [isload, setLoading] = useState(false);
  const addValue = (e) => {
    setformValue({ ...value, [e.target.name]: e.target.value, first_name: 'first_name', last_name: 'last_name' })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError(null)
    const res = await forgotPasswordReq(value);
    if (res && res.data) {
      toast.success(res?.data?.message)
      setLoading(false)
      localStorage.setItem('token', res.data?.token)
      localStorage.setItem('email', res.data?.user?.email) 
    }
    else if (res && res?.response) {
      toast.error(res?.response?.data?.message)
      setError(res?.response?.data?.errors)
      setLoading(false)
    }
    else {
      toast.info('Oops something went wrong')
      setLoading(false)
    }

  }
  return (
    <div className='auth signin'>
      <header>
        <header>
          <h1>Forgot Password</h1>
          <p>Enter the Email you registered with. We will send you instructions to recover your password.</p>
        </header>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row m-0">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Email</label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'email'} id="" aria-describedby="emailHelpId" placeholder={'Enter Email'}
                onChange={(e) => addValue(e)}
                required />
            </div>
          </div>
        </div>
    
 
        <div className="form-group authButton">
          <button className="btn form-control" disabled={isload === true ? true : false} type='submit'>
            {isload ? 'Processing...' : "Verify!"}
          </button>
        </div>
      </form>

      <div className="extra text-center">
        Return to <Link to="/auth/signin">Login! </Link>
      </div>



    </div>
  )
}

export default ForgotPassword
