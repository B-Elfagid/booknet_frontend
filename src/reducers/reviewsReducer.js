export default function reviewsReducer(state = {reviews: []}, action) {
   switch(action.type) {
     case "SET_REVIEWS":
      
       return {
         ...state, 
         reviews: action.payload
       };

       case "PENDING_REVIEWS":
          return {
            ...state, 
            reviews: [...state.reviews]
          };

       case "ADD_REVIEW":
       const newReviews = [...state.reviews, action.payload]
      console.log(newReviews)
        return {
          ...state,
          reviews: [...newReviews]
        };


       default:
        return state;
    }
}