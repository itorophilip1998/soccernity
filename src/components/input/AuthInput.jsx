import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setformValue } from '../../store/General';

const AuthInput = (props) => {
  const { name, type, preText, isname } = props.input
  const { error } = props.error;
  const dispatch = useDispatch()
  const [passwordType, setPType] = useState("password");
  const addValue = (e) => {
    dispatch(setformValue({ [e.target.name]: e.target.value })) 
  }
  return (
    <div className="form-group authInput">
      <label htmlFor={name} >{(isname && name === 'firstname') ? "Full Name" : (isname && name === 'lastname') ? "" : name}</label>
      <input type={type === 'password' ? passwordType : type}
        className={`form-control ${name === 'lastname' ? 'm_extra' : ''}`} name={name} id="" aria-describedby="emailHelpId" placeholder={preText}
        onChange={(e) => addValue(e)} 
      />
      {error && <small id="emailHelpId" className="form-text text-muted">{error}</small>}

      {passwordType === "password" ? (
        <VisibilityOff
          className=" passwordItem"
          onClick={(e) => setPType("text")}

        />
      ) : type === "password" && (
        <Visibility
          className=" passwordItem"
          onClick={(e) => setPType("password")}

        />
      )}



    </div>
  )
}

export default AuthInput
