
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from '../reducers/RootReducer'

const store = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )(createStore)(RootReducer);
  
  export default store;