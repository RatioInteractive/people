import React from 'react';

export default class Task extends React.Component {
  constructor (props) {
    super(props);
  }

  checked () {
    return Boolean(this.props.completedOn);
  }

  label () {
    if (this.props.completedOn) {
      return <strike>{this.props.name}</strike>;
    } else {
      return this.props.name;
    }
  }

  render () {
    return (
      <li className="scorecard-task checkbox list-group-item">
        <label>
          <input type="checkbox" checked={this.checked()}/>
          {this.label()}
        </label>
      </li>
    );
  }
}
