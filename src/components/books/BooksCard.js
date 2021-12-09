import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    return (
        <div className="container">
            <div className="card"> 
            <img src={props.book.image} /><br/>
            {props.book.title} <br/>
            {props.book.author} <br/>
            {props.book.category} <br/>
            {props.book.description}
            <div>
            <Link clasName="link-success" to={`/books/${props.book.id}` } >Go To Review</Link>
           
            </div>
            </div>   
            
        </div>
    )
}

export default BookCard;