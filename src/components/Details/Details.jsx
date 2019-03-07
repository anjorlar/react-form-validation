import React, { Component } from 'react'
import './Details.css'
import { Route, Switch } from 'react-router-dom'
import Login from '../Navbar/Login/Login'
import Home from '../Navbar/Home/Home.jsx'
import Profile from '../Navbar/Profile/Profile'
import Settings from '../Navbar/Settings/Settings'

class Details extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route path="/settings" component={Settings} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/login' component={Login} />
                    {/* <Route path='/' render={() => <h1>PLEASE LOGIN</h1>} /> */}
                    <Route path='/' component={Home} />
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        )
    }
}
export default Details;