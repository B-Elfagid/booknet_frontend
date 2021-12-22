import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../../actions/booksAction';
import { connect } from 'react-redux'
import Like from './Like';



 const BookCard = (props) => {

    function handleDelete() {
      props.dispatchdeleteBook(props.book.id)
    }
    
    return (
        <div className="BookList-container">
            <div className="card"> 
            <img src={props.book.image} alt="..." /><br/>
            {props.book.title} <br/>
            By:{props.book.author} <br/>
            {props.book.description}<br/>
          
          
            <div className="bottom-card">
              <Like book_id={props.book.id} likes={props.book.likes}/> 
               <Link className="link-success" to={`/books/${props.book.id}/reviews` } >Go To Review</Link><br/>
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