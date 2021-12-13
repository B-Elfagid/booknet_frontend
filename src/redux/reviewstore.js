import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import reviewsReducer from '../reducers/reviewsReducer';

export default createStore(reviewsReducer, applyMiddleware(thunk));


