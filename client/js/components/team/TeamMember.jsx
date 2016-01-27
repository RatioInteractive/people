import React from 'react';
import Moment from 'moment';

export default React.createClass({
  render: function render () {
    return (
      <div className="team-person panel panel-default">
        <div className="panel-heading clearfix">
                  <h2 ref="nameField"
            className="panel-title pull-left">
            { this.props.person.name || 'John Doe' }
          </h2>
        </div>
      </div>
    );
  }
});
