import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
         <div className="welcome-page">
             <header className="wel-page">
              <Link className="lnk-btn" to='/books'> Explore </Link>
              <h2> Welcome </h2>
              <p>Hello readers, booknet is a app where readers like you can discover new and Interesting books by browsing, adding books and leave comments and create book community.<br/>
                                “That’s the thing about books. They let you travel without moving your feet.” <br/>
                                                       Jhumpa Lahiri
              </p>
            </header>
         </div>
        )
    }
}

export default Home;


