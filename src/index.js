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
import { combineForms } from 'react-redux-form';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

import './index.css';

/* reducers */
import resorts from './reducers/resorts';
import userSession from './reducers/userSession';
import createNewsletterSubscription from './reducers/newsletterSubscription';


/* forms */
import newsletterSubscription from './forms/newsletterSubscription';

import App from './components/App/App';
import withTracker from './withTracker';

const history = createHistory();

const app = combineReducers({
  resorts,
  userSession,
  createNewsletterSubscription,
});

const formReducers = combineForms({
  newsletterSubscription,
}, 'forms');

const rootReducer = combineReducers({
  app,
  router: routerReducer,
  forms: formReducers,
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

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={withTracker(App)} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('🏂'),
);
