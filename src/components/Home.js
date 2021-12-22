// import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
        return(
         <div className="welcome-page">
             <header className="wel-page">
              <h2> Welcome </h2>
              <p>Hello readers, booknet is a app where readers like you can discover new and Interesting books by browsing, adding books and leave comments and create book community.<br/>
                                “That’s the thing about books. They let you travel without moving your feet.” <br/>
                                                       Jhumpa Lahiri
              </p>
              <Link className="lnk-btn" to='/books'> Explore </Link>
            </header>
         </div>
        )
    
}

export default Home;


