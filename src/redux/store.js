import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';

export default createStore(booksReducer, applyMiddleware(thunk))