import React from 'react';
import Task from './Task.jsx';

export default class Goal extends React.Component {
  constructor (props) {
    super(props);
  }

  tasks () {
    return this.props.tasks.map(task => {
      let key = `${this.props.name}:${task.name}:${task.deadline}`;
      return <Task key={key} name={task.name} deadline={task.deadline} completed_on={task.completed_on}/>;
    });
  }

  render () {
    let min = 0;
    let max = 6;
    let val = 3;
    let pct = (val / max * 100 >> 0) + '%';

    return (
      <div className="scorecard-goal panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title">
            { this.props.name }
          </h2>
        </div>
        <div className="panel-body">
          <div className="progress" style={{ padding: 0 }}>
            <div className="progress-bar"
              role="progressbar"
              aria-valuenow={val}
              aria-valuemin={min}
              aria-valuemax={max}
              style={{ width: pct }}>{pct}</div>
          </div>
          { this.props.description }
        </div>
        <ul className="list-unstyled list-group">
          { this.tasks() }
        </ul>
      </div>
    );
  }
}
