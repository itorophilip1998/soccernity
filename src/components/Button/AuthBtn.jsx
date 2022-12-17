import React from 'react'

const AuthBtn = ({ name }) => {
    return (
        <div className="form-group authButton">
            <button className="btn form-control" type='submit'>{name}</button>
        </div>
    )
}

export default AuthBtn
