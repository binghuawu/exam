import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory, Route } from 'react-router';

import Login from './pages/Login'
import TestPaper from './pages/TestPaper';
import Result from './pages/Result';
import Score from './pages/Score';
import NotFound from './pages/NotFound';

if (module.hot) {
  module.hot.accept(() => {
    render();
  })
}

render();

function render(onRender) {
  if (!onRender) { onRender = function() {}; }

  if (window) {
    ReactDom.render(
      <AppContainer>
          <Router history={ browserHistory }>
            <Route path="/" component={ Login } />
            <Route path="test-paper" component={ TestPaper } />
            <Route path="result" component={ Result } />
            <Route path="score/:num" component={ Score } />
            <Route path="*" component={ NotFound } />
          </Router>
      </AppContainer>,
      document.getElementById('root'),
      onRender
    );
  }
}