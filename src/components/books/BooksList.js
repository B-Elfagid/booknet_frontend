
import React from 'react';
import { Link } from 'react-router-dom';

export default function BookList() {



  return(
      <div>
          <h1> Book List </h1>
          <Link to='/'> Home </Link> <br/>
          <Link to='/addbook'> Add Book </Link>
          

     </div>
  )

}
