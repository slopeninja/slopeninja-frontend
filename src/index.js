import 'wicg-focus-ring';
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
import { persistStore, autoRehydrate } from 'redux-persist';
import { combineForms } from 'react-redux-form';
// import { createLogger } from 'redux-logger';
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
import ScrollToTop from './ScrollToTop';
import withTracker from './withTracker';

const history = createHistory();

const app = combineReducers({
  resorts,
  createNewsletterSubscription,
});

const formReducers = combineForms({
  newsletterSubscription,
}, 'forms');

const rootReducer = combineReducers({
  app,
  userSession,
  router: routerReducer,
  forms: formReducers,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(
    applyMiddleware(
      // middleware for intercepting and dispatching navigation actions
      // createLogger(),
      reduxThunk,
      routerMiddleware(history),
    ),
    autoRehydrate(),
  ),
);
// begin periodically persisting the store
persistStore(
  store,
  {
    whitelist: ['userSession'],
  },
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <Route component={withTracker(App)} />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('🏂'),
);
