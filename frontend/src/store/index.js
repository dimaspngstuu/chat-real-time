import {legacy_createStore,compose,combineReducers,applyMiddleware} from 'redux';

import thunkMiddleware from "redux-thunk";


//create a reducer
const rootReducer = combineReducers({

});

const middleware = [thunkMiddleware];


const store = legacy_createStore(rootReducer,compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;

