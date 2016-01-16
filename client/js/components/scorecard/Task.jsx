import React from 'react';

export default class Task extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li className="scorecard-task checkbox list-group-item">
        <label>
          <input type="checkbox"/> { this.props.name }
        </label>
      </li>
    );
  }
}
