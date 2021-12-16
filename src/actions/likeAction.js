
export const incrementLikes = (likes, book_id) => {
    return(dispatch) => {
      fetch(`http://localhost:8080/books/${book_id}`, {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
      },
      body: JSON.stringify(likes)
   })
   .then(r => r.json())
   .then(likes => dispatch({type: "INCREMENT_LIKES", payload: likes}))
}
}

    
