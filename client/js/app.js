require('../sass/main.scss');

import React from 'react';
import ReactDom from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import Scorecard from './containers/Scorecard';
import Team from './containers/Team';
import * as Comments from './actions/Comments';
import * as Goals from './actions/Goals';
import * as People from './actions/People';
import * as Tasks from './actions/Tasks';
import * as User from './actions/User';
import state from './state';

// Middleware that logs every action to the console
// @see: http://rackt.org/redux/docs/advanced/Middleware.html
const logger = store => next => action => {
  console.group(action.type);
  console.debug('action:', action);
  console.debug('old state:', store.getState());
  next(action);
  console.debug('new state:', store.getState());
  console.groupEnd();
};

// Register reducers for each top-level key in the application state
// @see: http://rackt.org/redux/docs/basics/Reducers.html
let reducers = combineReducers({
  comments: Comments.reducer,
  goals: Goals.reducer,
  people: People.reducer,
  tasks: Tasks.reducer,
  user: User.reducer
});

// Thunk middleware allows actions to return functions as well as objects.
// Useful for async operations like posting to a back-end.
// @see: http://rackt.org/redux/docs/advanced/AsyncActions.html
let store = applyMiddleware(logger, thunkMiddleware)(createStore)(reducers, state);

ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/scorecard" component={Scorecard}/>
        <Route path="/team" component={Team}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
