import React from 'react';
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
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import 'normalize.css';
/* eslint-disable import/extensions */
import 'flexboxgrid';
/* eslint-enable */
import './index.css';

import reducer from './reducer';

import Main from './components/Main/Main';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';
import FourOhFour from './components/FourOhFour/FourOhFour';
import WeatherBanner from './components/WeatherBanner/WeatherBanner';

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
      routerMiddleware(history),
    ),
  ),
);

// store.subscribe(() => {
//   console.log("store changed", store.getState())
// })

const RedirectToResorts = () => (
  <Redirect to="/resorts" />
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="Index-wrapper">
        <WeatherBanner />
        <div className="Index-content">
          <Switch>
            <Route exact path="/" component={RedirectToResorts} />
            <Route exact path="/resorts/:resortId?" component={Main} />
            <Route component={FourOhFour} />
          </Switch>
          <Route exact path="/resorts/:resortId?" component={SideNav} />
        </div>
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('🏂'),
);
