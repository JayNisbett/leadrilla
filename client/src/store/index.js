import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers/index';

const store = createStore(RootReducer, compose(applyMiddleware(ReduxThunk)));

// save every change of store
store.subscribe(()=>{
    localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
