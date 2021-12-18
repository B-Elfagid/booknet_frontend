 export default function likesReducer(state = {likes: 0}, action) {
    switch(action.type) {
        case "INCREMENT_LIKES":
         return {
  
           likes: state.likes + 1
         };
 
 
        default:
         return state;
     }
 }