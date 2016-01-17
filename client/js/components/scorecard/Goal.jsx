import React from 'react';
import Moment from 'moment';
import Task from './Task.jsx';
import ProgressBar from '../misc/ProgressBar.jsx';
import * as Goals from '../../actions/Goals';
import * as Tasks from '../../actions/Tasks';

const EMPTY_NAME_FIELD_CONTENT = 'Unnamed...';

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
          <h2 ref="nameField"
            className="panel-title pull-left"
            onClick={this.onNameFieldClick}
            onBlur={this.onNameFieldBlur}
            onKeyDown={this.onNameFieldKeyDown}>
            { this.props.goal.name || EMPTY_NAME_FIELD_CONTENT }
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

  onNameFieldClick: function onNameFieldClick (evt) {
    if (this.refs.nameField.textContent === EMPTY_NAME_FIELD_CONTENT) {
      this.refs.nameField.textContent = '';
    }
    this.refs.nameField.contentEditable = true;
    this.refs.nameField.focus();

    let range = document.createRange();
    let selection = window.getSelection();
    range.selectNodeContents(this.refs.nameField);
    selection.removeAllRanges();
    selection.addRange(range);
  },

  onNameFieldBlur: function onNameFieldBlur (evt) {
    let newName = this.refs.nameField.textContent;
    let action = Goals.setName(this.props.goal, newName);

    this.refs.nameField.contentEditable = false;

    if (newName === '') {
      this.refs.nameField.textContent = EMPTY_NAME_FIELD_CONTENT;
    }

    if (newName !== this.props.goal.name) {
      this.props.dispatch(action);
    }
  },

  onNameFieldKeyDown: function onNameFieldKeyDown (evt) {
    switch (evt.key) {
      case 'Enter':
        // Cancelling the event prevents the new line from being
        // entered after the new comment is saved
        evt.stopPropagation();
        evt.preventDefault();
        this.refs.nameField.blur();
        break;
      case 'Escape':
        this.refs.nameField.textContent = this.props.goal.name;
        this.refs.nameField.blur();
        break;
    }
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
