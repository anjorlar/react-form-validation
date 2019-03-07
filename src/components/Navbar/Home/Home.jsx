import React from 'react';
import Data from '../Data'

const Home = () => {
    return (
        <div className='home'>
            <h2>Gemstone Trader</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quisquam ullam vitae suscipit praesentium optio vero laboriosam porro dolor.</p>
            <img src={Data.url} alt="jdvhid" />
        </div>
    )
}

export default Home;