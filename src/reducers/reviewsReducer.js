export default function reviewsReducer(state = {reviews: []}, action) {
   switch(action.type) {
     case "SET_REVIEWS":
  
       return {
         ...state, 
         reviews: action.payload
       };

       case "ADD_REVIEW":
        return {
          ...state,
          reviews: [...state.reviews, action.payload]
        };


       default:
        return state;
    }
}