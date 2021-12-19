import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
return(
    <nav className="navbar navbar-expand-lg navbar-mainbg">
    <label class="logo">BookNet</label>
    <ul>

    <li className="active">
      <NavLink className="nav-link"
      to="/" exact>
        Home
      </NavLink>
    </li>

    <li className="active">
      <NavLink className="nav-link"
      to='/books' exact>
        Books List
      </NavLink>
    </li>

    <li className="active">
      <NavLink className="nav-link"
      to='/addbook' exact>
        Add Book
      </NavLink>
    </li>
       </ul>
    </nav>
)
}

export default Navbar;
