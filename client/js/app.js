require('../sass/main.scss');

import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Scorecard from './containers/Scorecard';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

// Thunk middleware allows actions to return functions as well as objects.
// Useful for async operations like posting to a back-end.
// @see: http://rackt.org/redux/docs/advanced/AsyncActions.html
let store = applyMiddleware(thunkMiddleware)(createStore)(reducers, window.state);

ReactDom.render((
  <Provider store={store}>
    <Scorecard/>
  </Provider>
), document.getElementById('root'));
