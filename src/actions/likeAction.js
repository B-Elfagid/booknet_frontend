
export const incrementLikes = (likes, book_id) => {
  
    return(dispatch) => {
      fetch(`http://localhost:8080/books/${book_id}`, {
        method: "PATCH",
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
      },
      body: JSON.stringify({book:{
         likes: likes + 1
      }})
   })
   .then(r => r.json())
   .then(book => { dispatch ({ type: "INCREMENT_BOOKLIKES", payload: book})})
}
}

    
