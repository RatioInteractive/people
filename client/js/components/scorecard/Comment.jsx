import React from 'react';
import Moment from 'moment';

export default class Comment extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let datestr = Moment(this.props.date, 'YYYYMMDD').format('MMM Do YYYY');
    return (
        <div className="scorecard-comment text-right">
          <hr/>
          <p className="text-left">
            { this.props.message }
          </p>
          <small>{ this.props.author } posted on { datestr }</small>
        </div>
    );
  }
}
