import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
         <div>
            
            <h2> Welcome </h2>
            <Link to='/books'> Explore </Link>
         </div>
        )
    }
}

export default Home;


