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

  export const addReview = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:8080/books/${id}`, {
          method: "POST",
          headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
          },
          body: JSON.stringify()
       })
       .then(r => r.json())
       .then(reviews => dispatch({type: "ADD_REVIEWS", payload: reviews}))
    }
 }
 