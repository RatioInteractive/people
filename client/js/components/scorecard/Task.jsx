import React from 'react';
import * as Tasks from '../../actions/Tasks';

export default React.createClass({

  checked: function checked () {
    return Boolean(this.props.task.completed_on);
  },

  label: function label () {
    if (this.props.task.completed_on) {
      return <strike>{this.props.task.name}</strike>;
    } else {
      return this.props.task.name;
    }
  },

  render: function render () {
    return (
      <li className="scorecard-task checkbox list-group-item">
        <label>
          <input type="checkbox"
            checked={this.checked()}
            onChange={this.onCheckboxChange}/>
          {this.label()}
        </label>
        <button type="button"
          className="close"
          aria-label="Close"
          onClick={this.onRemoveButtonClick}>
          <small aria-hidden="true" className="glyphicon glyphicon-remove"></small>
        </button>
      </li>
    );
  },

  onCheckboxChange: function onCheckboxChange (evt) {
    let action = this.checked() ?
      Tasks.uncomplete(this.props.task) : Tasks.complete(this.props.task);
    this.props.dispatch(action);
  },

  onRemoveButtonClick: function onDeleteIconClick (evt) {
    let action = Tasks.remove(this.props.task);
    this.props.dispatch(action);
  }
});
