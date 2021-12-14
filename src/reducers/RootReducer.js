import { combineReducers } from 'redux';
import booksReducer from '../reducers/booksReducer';
import reviewsReducer from '../reducers/reviewsReducer';
import likesReducer from '../reducers/likesReducer';

const RootReducer = combineReducers({
  reviews: reviewsReducer,
  books: booksReducer,
  likes: likesReducer
})

export default RootReducer
