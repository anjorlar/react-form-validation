import React from 'react'
import './Login.css'

// const Login = () => {
class Login extends React.Component {
    state = {
        inputfield: {
            Username: 'admin',
            Password: 'pass'
        }
    }
    render() {
        return (
            <div className='log' >
                <form action="" id='reg-form' method='post' noValidate>
                    <div>
                        <label>Username</label>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" placeholder='Password' />
                    </div>
                    <div>
                        <button
                            disabled={!this.inputfield}>Register</button>
                    </div >
                </form>
            </div>
        )
    }
}
export default Login;