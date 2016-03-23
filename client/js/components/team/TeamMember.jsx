import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router';
import * as Person from '../../actions/Person.js';

export default React.createClass({
  getGoalsStatistic : function getGoalsStatistic() {
    var count = this.props.person.goals.length;
    return count.toString() + ' goal' + (count === 1 ? '' : 's');
  },

  renderGoals: function renderGoals() {
    return this.props.person.goals.map(goal => {
      return <p key={goal._id}> {goal.name} </p>
    });
  },

  render: function render () {
    var scorecardLink = "/scorecard/" + this.props.person._id;
    return (
      <div className="team-person panel panel-default">
        <div className="panel-heading clearfix">
          <h2 ref="nameField" className="panel-title pull-left">
            <Link to={scorecardLink}>{ this.props.person.name || 'John Doe' }</Link>
          </h2>
          <div className="panel-title pull-right">
            { this.getGoalsStatistic() }
          </div>
        </div>
        <div className="panel-body">
            { this.renderGoals() }
        </div>
      </div>
    );
  },
});
