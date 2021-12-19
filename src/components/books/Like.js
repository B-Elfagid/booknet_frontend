

import React from 'react';
import { connect } from 'react-redux'
import { incrementLikes } from '../../actions/likeAction';

function Like(props) {

  const clicked = false;
  
  const handleClick = () => {
    if(clicked) {
      props.dispatchIncrementLikes(props.likes, props.book_id)
        alert("you have sucesfully liked the book")
    }else{
        alert("YOU CAN ONLY PRESS LIKE BUTTON ONCE!")
    }
  };
  
    return(
    <div>  
       <button type="button" id="like-button" onClick={handleClick}>
       &hearts; <p>{props.likes ? props.likes : 0} {props.likes === 1 ? `Like` : `Likes`}</p>
       </button>
     </div>
    )
  }


 

function mapDispatchToProps(dispatch) {
  return {
    dispatchIncrementLikes: (likes, book_id) => dispatch(incrementLikes(likes, book_id))
  }
 }

export default connect(null, mapDispatchToProps)(Like);




