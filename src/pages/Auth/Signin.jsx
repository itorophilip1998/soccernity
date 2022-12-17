import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { signinReq } from '../../utils/request';
import { toast } from 'react-toastify';
import AuthCheckBox from '../../components/input/AuthCheckBox'
import { setAuth } from '../../store/General';
import { useDispatch } from 'react-redux';

function Signin() {
  const [value, setformValue] = useState();
  const dispatch = useDispatch()
  // const [error, setError] = useState();
  const [passwordType, setPType] = useState("password");
  const [isload, setLoading] = useState(false);
  const addValue = (e) => {
    setformValue({ ...value, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // setError(null)
    const res = await signinReq(value);
    if (res && res.data) {
      toast.success(res?.data?.message)
      setLoading(false)
      localStorage.setItem('token', res.data?.token)
      localStorage.setItem('email', res.data?.user?.email)
      dispatch(setAuth(res.data))
      window.location.href = "/community"
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
        <h1>Welcome Back</h1>
        <p>Enter your eMail address and password to log in to
          Soccernity.</p>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row m-0">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Email</label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'login'} id="" aria-describedby="emailHelpId" placeholder={'Enter Email or Username'}
                onChange={(e) => addValue(e)}
                required />
            </div>
          </div>
        </div>
        <Link to="/auth/forgot-password" className='forgotPLink link'>Forgot Password?</Link>

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

        <AuthCheckBox />
        <div className="form-group authButton">
          <button className="btn form-control" disabled={isload === true ? true : false} type='submit'>
            {isload ? 'Processing...' : "Log in"}
          </button>
        </div>
      </form>

      <div className="extra text-center">
        Don’t have an account?  <Link to="/auth/signup">Create one here.</Link>
      </div>



    </div>
  )
}

export default Signin
