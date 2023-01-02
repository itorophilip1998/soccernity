
import React, { useState } from 'react'
import { updatProfileReq } from '../../utils/request';
import { ToastContainer, toast } from 'react-toastify';
// import { getTeams } from '../../store/LiveScores/Fixtures';

function CompleteProfile() {
  const [data, setformData] = useState();
  const [img, setImg] = useState('/images/upload.png');
  const [error, setError] = useState();
  const [isload, setLoading] = useState(false);
  const username = localStorage.getItem("username")
  const addValue = (e) => {
    const { name, value } = e.target
    setformData({ ...data, [name]: value })
    setError(null)

  }
  const addPicture = async (e) => {
    let input = e.target;
    let reader = new FileReader();
    reader.onload = res => {
      setImg(res.target.result)
    };
    reader.readAsDataURL(input.files[0]);
    const res = await updatProfileReq();
    if (res && res.data) {
      toast.success(res?.data?.message)
      setLoading(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError(null)
    const res = await updatProfileReq(data);
    if (res && res.data) {
      toast.success(res?.data?.message)
      setLoading(false)
      window.location.href = "/community"
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
                  className={`uploadFileInput my-2`}
                  onChange={(e) => addPicture(e)}
                  value=""
                  name="profile_photo"
                  title="Upload Profile image"
                  accept="image/*"
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
                className={`form-control border-0  m_extra `} name={'first_name'} id="" aria-describedby="emailHelpId" placeholder={'First Name'}
                onChange={(e) => addValue(e)}
                required />
              {error?.first_name && <small id="emailHelpId" className="form-text text-danger">{error?.first_name[0]}</small>}

            </div>
          </div>
          <div className="col-md-6 p-0 pl-1">
            <div className="form-group authInput">
              <label htmlFor={'email'} className="text-white" >*</label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'last_name'} id="" aria-describedby="emailHelpId" placeholder={'Last Name'}
                onChange={(e) => addValue(e)}
                required />
              {error?.last_name && <small id="emailHelpId" className="form-text text-danger">{error?.last_name[0]}</small>}

            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Username <span className="text-danger">*</span></label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} id="" aria-describedby="emailHelpId"
                value={username}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'date0fbirth'} >Date of Birth <span className="text-danger">*</span></label>
              <input type={'date'}
                className={`form-control border-0  m_extra `} name={'dob'} id="" aria-describedby="emailHelpId" placeholder={'Choose a Username'}
                onChange={(e) => addValue(e)}
                required
              />
              {error?.dob && <small id="emailHelpId" className="form-text text-danger">{error?.dob[0]}</small>}

            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'email'} >Location <span className="text-muted font-weight-normal">(Optional)</span></label>
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'location'} id="" aria-describedby="emailHelpId" placeholder={'Enter your location'}
                onChange={(e) => addValue(e)}
                required
              />
              {error?.dob && <small id="emailHelpId" className="form-text text-danger">{error?.dob[0]}</small>}

            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'bio'} >Bio <span className="text-muted  font-weight-normal">(Optional)</span></label>
              <textarea className={`form-control border-0  m_extra `} name="bio" id="" cols="30" rows="10" placeholder='Write a Bio'
                onChange={(e) => addValue(e)}
                maxLength="250"
              ></textarea>
              <small className="text-muted ml-3">{data?.bio?.length ?? 0}/250</small>
              {error?.bio && <small id="emailHelpId" className="form-text text-danger">{error?.bio[0]}</small>}


            </div>
          </div>
        </div>

        <div className="row m-0 mt-3">
          <div className="col-md-12 p-0 ">
            <div className="form-group authInput">
              <label htmlFor={'date0fbirth'} >Preferred Club <span className="text-danger">*</span></label>
              {/* <select id="" className={`form-control border-0  m_extra `} name={'username'} onChange={(e) => addValue(e)}>
                <option value="" selected>Select your preferred club</option>
              </select> */}
              <input type={'text'}
                className={`form-control border-0  m_extra `} name={'club'} id="" aria-describedby="emailHelpId" placeholder={'Verify your team'}
                onChange={(e) => addValue(e)}
                required
              />
              {error?.club && <small id="emailHelpId" className="form-text text-danger">{error?.club[0]}</small>}

              {/* <button onClick={() => searchClub()} className='btn-sm my-2 btn btn-success rounded-pill py-0' type='button' >verify</button> */}
            </div>
          </div>
        </div>
        <div className="form-group authButton">
          <button className="btn form-control" disabled={isload === true ? true : false} type='submit'>
            {isload ? 'Processing...' : "Create Profile"}
          </button>
        </div>
      </form>
      <ToastContainer />

    </div>
  )
}

export default CompleteProfile
