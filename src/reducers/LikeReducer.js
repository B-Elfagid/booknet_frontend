
export default function LikesReducer(state = { 
    likes: []
   }, action) {
   switch(action.type) {
     case "INCREASE_LIKES":
       return {
         likes: state.likes + 1
       };
 
       default:
           return state;
 
   }
}