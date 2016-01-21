import React from 'react';
import { Link } from 'react-router';
import * as User from '../../actions/User';

export default React.createClass({
  links: function links () {
    if (this.props.user.name) {
      return (
        <ul className="nav navbar-nav">
          <li><Link to="/scorecard">My Scorecard</Link></li>
          <li><Link to="/team">My Team</Link></li>
        </ul>
      );
    }
  },

  greeting: function greeting () {
    if (this.props.user.name) {
      return <span>Hello, {this.props.user.name}! </span>;
    } else {
      return <span></span>;
    }
  },

  auth: function auth () {
    if (this.props.user.name) {
      return (
        <a href="#" className="navbar-link"
          onClick={this.onLogoutClick}>Logout</a>
      );
    } else {
      return (
        <a href="#" className="navbar-link"
          onClick={this.onLoginClick}>Login</a>
      );
    }
  },

  render: function render () {
    return (
      <nav className="header navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">People</Link>
          </div>
          {this.links()}
          <p className="navbar-text navbar-right">
            {this.greeting()}
            {this.auth()}
          </p>
        </div>
      </nav>
    );
  },

  onLogoutClick: function onLogoutClick (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    let action = User.logout();
    this.props.dispatch(action);
  }
});
