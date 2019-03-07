import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='log'>
            <div>
                <input type="text" placeholder='Username' />
            </div>
            <div>
                <input type="text" placeholder='Password' />
            </div>
            <div>
                <button>Register</button>
            </div >
        </div>
    )
}
export default Login;