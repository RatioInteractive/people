import React from 'react';
import Comment from './Comment.jsx';
import Goal from './Goal.jsx';

export default class Scorecard extends React.Component {
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
        comments={goal.comments}
        createdOn={goal.created_on}
        updatedOn={goal.updated_on}/>;
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