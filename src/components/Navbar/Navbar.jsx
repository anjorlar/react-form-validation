import React, { Component } from 'react';
// import Home from './Home/Home.jsx';
// import Login from './Login/Login.jsx';
// import Profile from './Profile/Profile.jsx';
// import Settings from './Settings/Settings.jsx';
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {

    render() {

        return (
            <>
                <div className='navbar'>
                    <Link to='/'><b>HOMEPAGE</b></Link>
                    <Link to='/login'><b>LOGIN</b></Link>
                    <Link to='/profile'><b>PROFILE</b></Link>
                    <Link to='/settings'><b>SETTINGS</b></Link>
                </div>

            </>
        )
    };
};
export default Navbar;