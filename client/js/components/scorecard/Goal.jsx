import React from 'react';
import Task from './Task.jsx';
import ProgressBar from '../misc/ProgressBar.jsx';
import Moment from 'moment';

export default class Goal extends React.Component {
  constructor (props) {
    super(props);
  }

  tasks () {
    return this.props.tasks.map(task => {
      return <Task key={task._id}
          name={task.name}
          deadline={task.deadline}
          completedOn={task.completed_on}/>;
    });
  }

  countTasks () {
    return this.props.tasks.length;
  }

  countCompletedTasks () {
    return this.props.tasks.reduce((value, task) => {
      return task.completed_on ? value + 1 : value;
    }, 0);
  }

  render () {
    let lastUpdate = Moment(this.props.updatedOn, 'YYYYMMDD').fromNow();
    return (
      <div className="scorecard-goal panel panel-default">
        <div className="panel-heading clearfix">
          <h2 className="panel-title pull-left">
            { this.props.name }
          </h2>
          <small className="pull-right">
            { lastUpdate }
          </small>
        </div>
        <div className="panel-body">
          <ProgressBar
            min={0}
            max={this.countTasks()}
            value={this.countCompletedTasks()}/>
          { this.props.description }
        </div>
        <ul className="list-unstyled list-group">
          { this.tasks() }
        </ul>
      </div>
    );
  }
}
