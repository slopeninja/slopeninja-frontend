import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import 'normalize.css';
/* eslint-disable import/extensions */
import 'flexboxgrid';
/* eslint-enable */
import './index.css';

import Main from './components/Main/Main';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';
import FourOhFour from './components/FourOhFour/FourOhFour';

ReactDOM.render(
  <Router>
    <div className="Index-fixedWrapper">
      <div className="Index-wrapper">
        <div className="Index-content">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/resorts/:resortId" component={Main} />
            <Route component={FourOhFour} />
          </Switch>
          <SideNav />
        </div>
        <Footer />
      </div>
    </div>
  </Router>,
  document.getElementById('🏂'),
);
