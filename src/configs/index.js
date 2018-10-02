import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      logger,
    ),
  ),
);

export default store;