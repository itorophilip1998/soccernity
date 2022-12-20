import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { resetPasswordReq } from '../../utils/request';
import { toast } from 'react-toastify';

function ResetPassword() {
  const query = new URLSearchParams(window.location.search);
  const email = query.get("email");
  const token = query.get("token");
  const [value, setformValue] = useState();
  // const [error, setError] = useState();
  const [passwordType, setPType] = useState("password");
  const [isload, setLoading] = useState(false);
  const addValue = (e) => {
    setformValue({
      ...value, [e.target.name]: e.target.value,
      email: email,
      token: token
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // setError(null)
    const res = await resetPasswordReq(value);
    if (res && res.data) {
      toast.success(res?.data?.message)
      setLoading(false)
      localStorage.setItem('token', res.data?.token)
      localStorage.setItem('email', res.data?.user?.email)
    }
    else if (res && res?.response) {
      toast.error(res?.response?.data?.message)
      // setError(res?.response?.data?.errors)
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
        <h1>Reset Password</h1>
        <p>Choose a new secure password.</p>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row m-0">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'password'} >Password</label>
              <input type={passwordType}
                className={`form-control border-0  m_extra `} name={'password'} id="" aria-describedby="emailHelpId" placeholder={'Enter Password'}
                onChange={(e) => addValue(e)}
                required
              />
              {passwordType === "password" ? (
                <VisibilityOff
                  className=" passwordItem"
                  onClick={(e) => setPType("text")}
                />
              ) : (
                <Visibility
                  className=" passwordItem"
                  onClick={(e) => setPType("password")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'password'} >Confirm Password</label>
              <input type={passwordType}
                className={`form-control border-0  m_extra `} name={'password_confirmation'} id="" aria-describedby="emailHelpId" placeholder={'Confirm Password'}
                onChange={(e) => addValue(e)}
                required
              />

            </div>
          </div>
        </div>

        <div className="form-group authButton">
          <button className="btn form-control" disabled={isload === true ? true : false} type='submit'>
            {isload ? 'Processing...' : "Reset"}
          </button>
        </div>
      </form>

      <div className="extra text-center">
        Return to <Link to="/auth/signin">Login! </Link>
      </div>



    </div>
  )
}

export default ResetPassword
