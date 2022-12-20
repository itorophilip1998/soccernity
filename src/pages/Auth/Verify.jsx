import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Verify() {
    const email = localStorage.getItem('email')
    const [counter, setCounter] = useState(60)
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter])
    return (
        <div className='auth signin text-center pt-5'>
            <header>
                <p>Verify your email <b>{email}</b> </p>
            </header>

            <div className="form-group authButton">
                <button className="btn form-control" type='button' disabled={counter === 0 ? false : true} onClick={() => setCounter(60)}>
                     {counter ? `Please wait ${counter}` : 'Resend'}
                </button>
            </div>


            <div className="extra text-center">
               I made a mistake? <Link to="/auth/signup">click here</Link>
            </div>


        </div>
    )
}

export default Verify
