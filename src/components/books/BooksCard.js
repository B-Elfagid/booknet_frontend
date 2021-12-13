import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../../actions/booksAction';
import { connect } from 'react-redux'


 function BookCard(props) {

    function handleDelete() {
      props.dispatchdeleteBook(props.book.id)
    }
    return (
        <div className="container">
            <div className="card"> 
            <img src={props.book.image} /><br/>
            {props.book.title} <br/>
            {props.book.author} <br/>
            {props.book.category} <br/>
            {props.book.description}
            <div>
            <Link clasName="link-success" to={`/books/${props.book.id}/reviews` } >Go To Review</Link><br/>
             <button onClick={handleDelete} >X</button>
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