
import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import { signinReq } from '../../utils/request';
import { toast } from 'react-toastify';
import { setAuth } from '../../store/General';
import { useDispatch } from 'react-redux';



function CompleteProfile() {
  const [value, setformValue] = useState();
  const dispatch = useDispatch()
  const [img, setImg] = useState('/images/upload.png'); 
  const [isload, setLoading] = useState(false);
  const addValue = (e) => {
    setformValue({ ...value, [e.target.name]: e.target.value })
    let input = e.target;
    let reader = new FileReader();
    reader.onload = res => {
      setImg(res.target.result)
    };
    reader.readAsDataURL(input.files[0]);
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
    <div className='auth signin completeProfile'>
      <header>
        <h1>Complete Registration</h1>
        <p>Set up your user profile here.</p>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Add a Profile Picture</label>
              <div className="p-2">
                <input type={'file'}
                  className={`uploadFileInput my-2`} name={'login'}
                  onChange={(e) => addValue(e)}
                  value=""
                  title=""
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-6 p-0 pr-1">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Fullname <span className="text-danger">*</span></label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'firstname'} id="" aria-describedby="emailHelpId" placeholder={'First Name'}
                onChange={(e) => addValue(e)}
                required />
            </div>
          </div>
          <div className="col-md-6 p-0 pl-1">
            <div className="form-group authInput">
              <label htmlFor={'email'} className="text-white" >*</label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'lastname'} id="" aria-describedby="emailHelpId" placeholder={'Last Name'}
                onChange={(e) => addValue(e)}
                required />
            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Username <span className="text-danger">*</span></label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'username'} id="" aria-describedby="emailHelpId" placeholder={'Choose a Username'}
                onChange={(e) => addValue(e)}
                required
              />
            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'date0fbirth'} >Date of Birth <span className="text-danger">*</span></label>
              <input type={'date'}
                className={`form-control border-0  m_extra `} name={'username'} id="" aria-describedby="emailHelpId" placeholder={'Choose a Username'}
                onChange={(e) => addValue(e)}
                required
              />
            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Location <span className="text-muted font-weight-normal">(Optional)</span></label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'username'} id="" aria-describedby="emailHelpId" placeholder={'Enter your location'}
                onChange={(e) => addValue(e)}
                required
              />
            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'bio'} >Bio <span className="text-muted  font-weight-normal">(Optional)</span></label>
              <textarea className={`form-control border-0  m_extra `} name="" id="" cols="30" rows="10" placeholder='Write a Bio'
                onChange={(e) => addValue(e)}
              ></textarea>

            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'date0fbirth'} >Preferred Club <span className="text-danger">*</span></label>
              <select id="" className={`form-control border-0  m_extra `} name={'username'} onChange={(e) => addValue(e)}>
                <option value="" selected>Select your preferred club</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group authButton">
          <button className="btn form-control" disabled={isload === true ? true : false} type='submit'>
            {isload ? 'Processing...' : "Create Profile"}
          </button>
        </div>
      </form>

      <div className="extra text-center">
        <Link to="/auth/signup">Skip</Link>
      </div>
 

    </div>
  )
}

export default CompleteProfile
