import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function render () {
    return (
      <nav className="header navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">People</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/scorecard">My Scorecard</Link></li>
            <li><Link to="/team">My Team</Link></li>
          </ul>
          <p className="navbar-text navbar-right">
            Hello, {this.props.user.name}! <a href="#" className="navbar-link">Logout</a>
          </p>
        </div>
      </nav>
    );
  }
});
