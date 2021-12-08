import React from 'react';

const BookCard = (props) => {
    return (
        <div className="container">
            <div className="card">
            <img src={props.book.image} />
            {props.book.title}
            {props.book.author}
            {props.book.category}
            {props.book.description}
            </div>
        </div>
    )
}

export default BookCard;