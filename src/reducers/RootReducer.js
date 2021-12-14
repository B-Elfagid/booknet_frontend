import { combineReducers } from 'redux';
import booksReducer from '../reducers/booksReducer';
import reviewsReducer from '../reducers/reviewsReducer';
const RootReducer = combineReducers({
  reviews: reviewsReducer,
  books: booksReducer
})

export default RootReducer
