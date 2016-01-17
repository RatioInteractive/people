import React from 'react';
import Moment from 'moment';
import Task from './Task.jsx';
import ProgressBar from '../misc/ProgressBar.jsx';
import * as Tasks from '../../actions/Tasks';

export default React.createClass({
  tasks: function tasks () {
    return this.props.goal.tasks.map(task => {
      return <Task key={task._id}
          task={task}
          dispatch={this.props.dispatch}/>;
    });
  },

  countTasks: function countTasks () {
    return this.props.goal.tasks.length;
  },

  countCompletedTasks: function countCompletedTasks () {
    return this.props.goal.tasks.reduce((value, task) => {
      return task.completed_on ? value + 1 : value;
    }, 0);
  },

  render: function render () {
    let lastUpdate = Moment(this.props.goal.updated_on, 'YYYYMMDD').fromNow();
    return (
      <div className="scorecard-goal panel panel-default">
        <div className="panel-heading clearfix">
          <h2 className="panel-title pull-left">
            { this.props.goal.name }
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
          { this.props.goal.description }
        </div>
        <ul className="list-unstyled list-group">
          { this.tasks() }
          <li className="list-item">
            <input ref="newTaskDescription"
              type="text"
              className="form-control"
              placeholder="Write another task..."
              onBlur={this.onNewTaskDescriptionBlur}
              onKeyDown={this.onNewTaskDescriptionKeyDown}/>
          </li>
        </ul>
      </div>
    );
  },

  onNewTaskDescriptionBlur: function onNewTaskDescriptionBlur (evt) {
    let parent = this.props.goal;
    let description = this.refs.newTaskDescription.value;
    let action = Tasks.create(parent, description);
    if (description) {
      this.refs.newTaskDescription.value = '';
      this.props.dispatch(action);
      this.refs.newTaskDescription.focus();
    }
  },

  onNewTaskDescriptionKeyDown: function onNewTaskDescriptionKeydown (evt) {
    switch (evt.key) {
      case 'Enter':
        this.onNewTaskDescriptionBlur(evt);
        break;
      case 'Escape':
        this.refs.newTaskDescription.value = '';
        this.refs.newTaskDescription.blur();
        break;
    }
  }
});
