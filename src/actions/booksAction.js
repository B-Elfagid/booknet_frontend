
export const setBooks = () => {
   return (dispatch) => {
    fetch('http://localhost:8080/books')
    .then(r => r.json())
    .then(books => dispatch({type: "SET_BOOKS", payload: books}))
   }
}




