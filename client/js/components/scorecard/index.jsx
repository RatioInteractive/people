import React from 'react';
import Comment from './Comment.jsx';
import Goal from './Goal.jsx';
import * as Comments from '../../actions/Comments';

export default React.createClass({
  goals: function goals () {
    return this.props.goals.map(goal => {
      return <Goal key={goal._id}
        name={goal.name}
        description={goal.description}
        tasks={goal.tasks}
        comments={goal.comments}
        createdOn={goal.created_on}
        updatedOn={goal.updated_on}/>;
    });
  },

  comments: function comments () {
    return this.props.comments.map((comment, i) => {
      return <Comment key={comment._id}
          date={comment.date}
          message={comment.message}
          author={comment.author}/>;
    });
  },

  render: function render () {
    return (
      <article className="scorecard">
        <div className="page-header">
          <h1>
            { this.props.name } <small>Scorecard</small>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-8">
            { this.goals() }
          </div>
          <div className="col-md-4">
            <textarea ref="commentField"
              className="form-control"
              rows="4"
              placeholder="Add a comment..."
              onBlur={this.onCommentFieldBlur}></textarea>
            { this.comments() }
          </div>
        </div>
      </article>
    );
  },

  onCommentFieldBlur: function onCommentFieldBlur (evt) {
    let parent = this.props;
    let author = this.props.user;
    let message = this.refs.commentField.value;
    let action = Comments.create(parent, author, message);
    this.refs.commentField.value = '';
    this.props.dispatch(action);
  }
});
