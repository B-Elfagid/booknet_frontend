

export const incrementLikes = (book_id) => {
    return(dispatch) => {
      fetch(`http://localhost:8080/books/${book_id}`)
      .then(res => res.json())
    //   .then(json => {
    //     debugger
    //     console.log(json)
    //     return json
    //   })
      .then(likes => dispatch({type: "INCREMENT_LIKES", payload: likes}))
      
    }
  }
