 export default function likesReducer(state = {likes: 0}, action) {
    switch(action.type) {
        case "INCREMENT_LIKES":
         return {
           ...state,
           likes: [...state + 1, action.payload]
         };
 
 
        default:
         return state;
     }
 }