import React from 'react';
import Header from '../components/header/index.jsx';
import { connect } from 'react-redux';

const App = React.createClass({
  render () {
    return (
      <div>
        <Header user={this.props.user} dispatch={this.props.dispatch}/>
        <div className="container">
        {this.props.children}
        </div>
      </div>
    );
  }
});

function propsFromState (state) {
  return Object.assign({}, {
    user: state.user
  });
}

export default connect(propsFromState)(App);
