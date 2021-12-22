

export default function booksReducer(state = { 
   books: [],  
  }, action) {
  switch(action.type) {
    case "SET_BOOKS":
      return {
        ...state, 
        books: [...action.payload]
      };

      case "ADD_BOOK":
        return {
          ...state,
          books: [...state.books, action.payload]
        };

      case "DELETE_BOOK":
       
      const newBooks = state.books.filter(book => book.id !== action.payload)
       return {
         ...state,
         books: newBooks
       }
       
       case "INCREMENT_BOOKLIKES":
       const bookIndex = state.books.findIndex(b => b.id === action.payload.id)
         return{
           ...state, 
           books: [
             ...state.books.slice(0, bookIndex),
             action.payload,
             ...state.books.slice(bookIndex + 1)
           ]
         }


      default:
          return state;

  }

  

   

}