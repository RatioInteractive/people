import React from 'react';
import Comment from '../components/scorecard/Comment.jsx';
import Goal from '../components/scorecard/Goal.jsx';
import { connect } from 'react-redux';

class Scorecard extends React.Component {
  constructor (props) {
    super(props);
  }

  goals () {
    return this.props.goals.map(goal => {
      let key = `${this.props.name}:${goal.name}`;
      return <Goal key={key}
        name={goal.name}
        description={goal.description}
        tasks={goal.tasks}
        comments={goal.comments}/>;
    });
  }

  comments () {
    return this.props.comments.map((comment, i) => {
      return <Comment key={i}
          date={comment.date}
          message={comment.message}
          author={comment.author}/>;
    });
  }

  render () {
    return (
      <article className="scorecard">
        <div className="page-header">
          <h1>
            { this.props.name } <small>Scorecard</small>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-8">{ this.goals() }</div>
          <div className="col-md-4">
            <textarea className="form-control" rows="4" placeholder="Add a comment..."></textarea>
            { this.comments() }
          </div>
        </div>
      </article>
    );
  }
}

function propsFromState (state) {
  return state.people[0];
}

export default connect(propsFromState)(Scorecard);
