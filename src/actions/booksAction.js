
export const setBooks = (books) => (
    {type: "SET_BOOKS", payload: books}
     )

// export const fetchBooks = () => {
//     return dispatch => {
//         fetch("http://localhost:3000/books")
//         .then(res => res.json())
//         .then(books=>dispatch({type:"SET_BOOKS", payload:books}))
//     }
// }