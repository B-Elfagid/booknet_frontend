
export const setBooks = () => {
   return (dispatch) => {
    fetch('http://localhost:8080/books')
    .then(r => r.json())
    .then(books => dispatch({type: "SET_BOOKS", payload: books}))
   }
}


export const addBook = (book) => {
   return (dispatch) => {
      fetch('http://localhost:8080/books', {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(book)
      })
      .then(r => r.json())
      .then(book => dispatch({type: "ADD_BOOK", payload: book}))
   }
}

export const deleteBook = (id) => {
  return (dispatch) => {
   fetch(`http://localhost:8080/books/${id}`, {
      method: "DELETE"
   })
   .then(r => r.json())
   .then(id => dispatch({type: "DELETE_BOOK", payload: id}))
  }
}


// export const editBook = (book) => {
//    return(dispatch) => {
//       fetch(`http://localhost:8080/books/${book.id}`, {
//        method: "PATCH",
//        headers: {
//          "Content-Type": "application/json",
//          "Accept": "application/json"
//       },
//         body: JSON.stringify({likes: book.likes + 1})
//       })
//       .then(r => r.json())
//       .then(b => dispatch({type: "EDIT_BOOK", payload: b}))
//    }
// }



