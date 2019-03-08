import React, { Component } from 'react';
// import Container from './components/container/Container'
// import { Route, Switch } from 'react-router-dom'
import Details from './components/Details/Details'
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Navbar/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='orb'>
          <Details />
          {/* <Profile /> */}
        </div>
      </div>
    );
  }
}
export default App;
