import { combineReducers } from 'redux';
import userReducer from './User';
import productReducer from './Product';

const rootReducers = combineReducers({
    user : userReducer,
    products : productReducer,
});

export default rootReducers;