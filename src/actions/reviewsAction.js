  export const setReviews = (bookId) => {
    return(dispatch) => {
      fetch(`http://localhost:8080/books/${bookId}/reviews`)
      .then(res => res.json())
      // .then(json => {
      //   // console.log(json)
      //   return json
      // })
      .then(reviews => dispatch({type: "SET_REVIEWS", payload: reviews}))
      
    }
  }