import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../../actions/booksAction';
import { connect } from 'react-redux'
import Like from './Like';


 function BookCard(props) {

    function handleDelete() {
      props.dispatchdeleteBook(props.book.id)
    }
    return (
        <div className="container">
            <div className="card"> 
            <img src={props.book.image} alt="book image" /><br/>
            {props.book.title} <br/>
            {props.book.author} <br/>
            {props.book.category} <br/>
            {props.book.description}<br/>
            <p>{props.book.likes}</p>
            <button className="like-btn">Like &hearts;</button>
            <div className="bottom-card">
              <Like /> 
               <Link clasName="link-success" to={`/books/${props.book.id}/reviews` } >Go To Review</Link><br/>
               <div><button onClick={handleDelete} >X</button></div>
            </div>
            </div>   
             
        </div>
    )
}


  
  
  function mapDispatchToProps(dispatch) {
   return {
     dispatchdeleteBook: (bookId) => dispatch(deleteBook(bookId))
   }
  }

export default connect(null, mapDispatchToProps)(BookCard)