import React from 'react';
import { connect } from 'react-redux';

class Scorecard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="scorecard">
        <h2>{ this.props.name }</h2>
      </article>
    );
  }
}

function propsFromState (state) {
  return state.people[1];
}

export default connect(propsFromState)(Scorecard);
