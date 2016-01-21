import React from 'react';

export default React.createClass({
  render: function render () {
    return (
      <nav className="header navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">People</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#">My Scorecard</a></li>
            <li><a href="#">My Team</a></li>
          </ul>
          <p className="navbar-text navbar-right">
            Hello, {this.props.user.name}! <a href="#" className="navbar-link">Logout</a>
          </p>
        </div>
      </nav>
    );
  }
});
