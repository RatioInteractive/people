import React from 'react';
import TeamMember from './TeamMember.jsx';

export default React.createClass({
  teamMembers: function teamMembers () {
    return this.props.people.map((person) => {
      return <TeamMember key={person._id} person={person} dispatch={this.props.dispatch} />;
    });
  },

  render: function render () {
    return (
      <article className="team">
        <header className="page-header">
          <h1>
            My Team
          </h1>
        </header>
        <div>
          { this.teamMembers() }
        </div>
      </article>
    );
  },

  componentWillReceiveProps: function componentWillReceiveProps (props) {
    if (!props.user.name) {
      props.history.replaceState(null, '/');
    }
  }
});
