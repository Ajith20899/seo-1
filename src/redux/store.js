import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// Import your root reducer and root saga
import rootReducer from './reducer';
import rootSaga from './saga';
import { FETCH_USERS_REQUEST } from './actions';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }

    return nextState;
  } else {
    return rootReducer(state, action);
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, bindMiddleware([sagaMiddleware]));
store.sagaTask = sagaMiddleware.run(rootSaga);

export const makeStore = (context) => {
  return store;
};

store.subscribe((state) => {
  console.log("sub state === ", state);
})

export const dispatch = store.dispatch;

export const wrapper = createWrapper(makeStore, { debug: false });