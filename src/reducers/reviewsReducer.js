export default function reviewsReducer(state = {reviews: []}, action) {
   switch(action.type) {
     case "SET_REVIEWS":
       console.log(action.payload)
       return {
         ...state, 
         reviews: action.payload
       };

       default:
        return state;
    }
}