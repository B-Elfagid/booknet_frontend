export default function booksReducer(state = { 
   books: []
  }, action) {
  switch(action.type) {
    case "SET_BOOKS":
      return {
        ...state, 
        books: action.payload
      };
      
      default:
          return state;
  }

}