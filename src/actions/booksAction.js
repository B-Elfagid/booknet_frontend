export function fetchBooks() {
    return dispatch => {
        fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(books=>dispatch({type:"SET_BOOKS", payload:books}))
    }
}