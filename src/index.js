import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
/* eslint-disable import/extensions */
import 'flexboxgrid';
/* eslint-enable */
import './index.css';

import Main from './components/Main/Main';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <div className="Index-fixedWrapper">
    <div className="Index-wrapper">
      <div className="Index-content">
        <Main />
        <SideNav />
      </div>
      <Footer />
    </div>
  </div>,
  document.getElementById('🏂'),
);
