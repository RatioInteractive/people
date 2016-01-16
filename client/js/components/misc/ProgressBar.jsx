import React from 'react';

export default class ProgressBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let min = this.props.min;
    let max = this.props.max;
    let value = this.props.value;
    let pct = (value / max * 100 >> 0) + '%';
    return (
      <div className="progress" style={{ padding: 0 }}>
        <div className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          style={{
            width: pct,
            minWidth: 45
          }}>{`${value} of ${max}`}</div>
      </div>
    );
  }
}
