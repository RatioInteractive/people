import React from 'react';
import Comment from './Comment.jsx';
import Goal from './Goal.jsx';
import * as Comments from '../../actions/Comments';
import * as Goals from '../../actions/Goals';

export default React.createClass({
  navbar: function navbar () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-form navbar-right">
            <button className="btn btn-primary"
              onClick={this.onAddGoalButtonClick}>
              <small className="glyphicon glyphicon-plus"></small>
              <span> Add a goal</span>
            </button>
          </div>
        </div>
      </nav>
    );
  },

  goals: function goals () {
    return this.props.goals.map(goal => {
      return <Goal key={goal._id}
        goal={goal}
        dispatch={this.props.dispatch}/>;
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
        <header className="page-header">
          <h1>
            Scorecard <small>{ this.props.person.name }</small>
          </h1>
        </header>
        <div className="row">
          <div className="col-md-8">
            { this.navbar() }
            { this.goals() }
          </div>
          <div className="col-md-4">
            <textarea ref="commentField"
              className="form-control"
              rows="4"
              placeholder="Add a comment..."
              onBlur={this.onCommentFieldBlur}
              onKeyDown={this.onCommentFieldKeyDown}></textarea>
            { this.comments() }
          </div>
        </div>
      </article>
    );
  },

  componentWillReceiveProps: function componentWillReceiveProps (props) {
    if (!props.user.name) {
      props.history.replaceState(null, '/');
    }
  },

  onAddGoalButtonClick: function onAddGoalButtonClick (evt) {
    let parent = this.props.person;
    let action = Goals.create(parent);
    this.props.dispatch(action);
  },

  onCommentFieldBlur: function onCommentFieldBlur (evt) {
    let parent = this.props.person;
    let author = this.props.user;
    let message = this.refs.commentField.value;
    let action = Comments.create(parent, author, message);
    if (message) {
      this.refs.commentField.value = '';
      this.props.dispatch(action);
    }
  },

  onCommentFieldKeyDown: function onCommentFieldKeyDown (evt) {
    switch (evt.key) {
      case 'Enter':
        // Cancelling the event prevents the new line from being
        // entered after the new comment is saved
        evt.stopPropagation();
        evt.preventDefault();
        this.refs.commentField.blur();
        break;
      case 'Escape':
        this.refs.commentField.value = '';
        this.refs.commentField.blur();
        break;
    }
  }
});
