import React from 'react';

export default React.createClass({
  render: function render () {
    return (
      <article className="team">
        <header className="page-header">
          <h1>
            Team
          </h1>
        </header>
      </article>
    );
  },

  componentWillReceiveProps: function componentWillReceiveProps (props) {
    if (!props.user.name) {
      props.history.replaceState(null, '/');
    }
  }
});
