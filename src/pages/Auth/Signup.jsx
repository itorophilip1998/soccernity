import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { signupReq } from '../../utils/request';
import { toast } from 'react-toastify';

function SignUp() {
  const [value, setformValue] = useState();
  const navigate = useNavigate()
  const [error, setError] = useState();
  const [passwordType, setPType] = useState("password");
  const [isload, setLoading] = useState(false);
  const addValue = (e) => {
    setformValue({ ...value, [e.target.name]: e.target.value, first_name: 'first_name', last_name: 'last_name' })
    setError(null)

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError(null)
    const res = await signupReq(value);
    if (res && res.data) {
      toast.success(res?.data?.message)
      setLoading(false)
      localStorage.setItem('email', res.data?.user?.email)
      navigate('/auth/verify')

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
        <h1>Register</h1>
        <p>Sign up to Soccernity.</p>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>

        <div className="row m-0">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'finame'} >Username</label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'username'} id="" aria-describedby="emailHelpId" placeholder={'Enter Username'}
                onChange={(e) => addValue(e)}
                required
              />
              {error?.username && <small id="emailHelpId" className="form-text text-danger">{error?.username[0]}</small>}
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Email</label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'email'} id="" aria-describedby="emailHelpId" placeholder={'Enter Email'}
                onChange={(e) => addValue(e)}
                required />
              {error?.email && <small id="emailHelpId" className="form-text text-danger">{error?.email[0]}</small>}

            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'password'} >Password</label>
              <input type={passwordType}
                className={`form-control border-0  m_extra `} name={'password'} id="" aria-describedby="emailHelpId" placeholder={'Enter Password'}
                onChange={(e) => addValue(e)}
                required
              />
              {error?.password && <small id="emailHelpId" className="form-text text-danger">{error?.password[0]}</small>}

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


        <div className="extra extra2 text-left ">
          By creating an account, you agree to our <Link to="/terms">Terms</Link>  and have read and acknowledge the <Link to="/policy">Privacy Policy</Link>.
        </div>
        <div className="form-group authButton">
          <button className="btn form-control" disabled={isload === true ? true : false} type='submit'>
            {isload ? 'Processing....' : "Register"}
          </button>
        </div>
      </form>

      <div className="extra text-center">
        Already have an account? <Link to="/auth/signin">Signin</Link>
      </div>



    </div>
  )
}

export default SignUp
