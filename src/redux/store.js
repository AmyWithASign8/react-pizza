import  {createStore}  from 'redux';
import rootReducer from './reducers'


let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
window.store = store;

export default store;