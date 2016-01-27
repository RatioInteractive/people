import React from 'react';
import TeamMember from './TeamMember.jsx';

export default React.createClass({
  teamMembers: function teamMembers() {
    return this.props.people.map((person, i) => {
      return <TeamMember key={person._id} person={person}/>
    })
  },

  render: function render () {
    return (
      <article className="team">
        <header className="page-header">
          <h1>
            Team
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
