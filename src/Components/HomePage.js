import React from 'react';
import {Link} from "react-router-dom";

function HomePage(props) {
    return (
        <div className='home'>
            <h1>Welcome!</h1>
            <Link to='/books'>Click on me</Link>
        </div>
    );
}

export default HomePage;