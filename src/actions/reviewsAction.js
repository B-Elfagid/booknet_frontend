  export const setReviews = (book_id) => {
    return(dispatch) => {
      fetch(`http://localhost:8080/books/${book_id}/reviews`)
      .then(res => res.json())
      // .then(json => {
      //   debugger
      //   console.log(json)
      //   return json
      // })
      .then(reviews => dispatch({type: "SET_REVIEWS", payload: reviews}))
      
    }
  }


  export const addReview = (action, comment) => {
    const bookId = action.split("/")[4]
    const reviewData = {review:{comment:comment.comment, book_id:bookId}}
    return (dispatch) => {
      fetch(`http://localhost:8080/books/${bookId}/reviews`, {
          method: "POST",
          headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
          },
          body: JSON.stringify(reviewData)
       })
       .then(r => r.json())
       .then(reviews => dispatch({type: "ADD_REVIEWS", payload: reviews}))
    }
 }


// export const addReview = (action, comment) => {
//   const bookId = action.split("/")[4]
//   const reviewData = {review:{comment:comment.comment, book_id:bookId}}
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(reviewData)
    
// };

// return(dispatch) => {
// fetch(`http://localhost:8080/books/${bookId}/reviews`, requestOptions)
//     .then(response => response.json())
//     .then(comment => dispatch({type: "ADD_REVIEWS", payload: comment}))

// }
// }

 