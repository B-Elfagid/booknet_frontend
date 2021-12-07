
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





