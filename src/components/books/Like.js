

import React from 'react';
import { connect } from 'react-redux'
import { incrementLikes } from '../../actions/likeAction';

function Like(props) {
  const handleClick = () => {
   
   props.dispatchIncrementLikes(props.likes, props.book_id)
  };
  
    return(
    <div>  
      {/* {props.books.likes} */}
      <button onClick={handleClick}> &hearts;</button>   
        {/* <p>{props.state.likes} Likes</p> */}
       <p>{props.likes ? props.likes : 0} {props.likes === 1 ? `Like` : `Likes`}</p>
     </div>
    )
  }


 

function mapDispatchToProps(dispatch) {
  return {
    dispatchIncrementLikes: (likes, book_id) => dispatch(incrementLikes(likes, book_id))
  }
 }

export default connect(null, mapDispatchToProps)(Like);




