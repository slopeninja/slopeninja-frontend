import React from 'react';
import {
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import 'normalize.css';
/* eslint-disable import/extensions */
import 'flexboxgrid';
/* eslint-enable */
import './index.css';

import reducer from './reducer';

import App from './components/App/App';

const history = createHistory();

const rootReducer = combineReducers({
  app: reducer,
  router: routerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      // middleware for intercepting and dispatching navigation actions
      createLogger(),
      reduxThunk,
      routerMiddleware(history),
    ),
  ),
);


// store.subscribe(() => {
//   console.log("store changed", store.getState())
// })

//
//

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('🏂'),
);
