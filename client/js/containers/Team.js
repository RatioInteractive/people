import Team from '../components/team/index.jsx';
import { connect } from 'react-redux';

// Duplicates the same function in Scorecard.js.
function getGoalsForPerson (goals, person) {
  return goals.filter(goal => goal._parent === person._id);
}

function mapGoalsToPeople (goals, people) {
	return people.map(person => {
		return Object.assign({}, person, {
			goals: getGoalsForPerson(goals, person)
		});
	});
}

function propsFromState (state) {
	var peopleWithGoals = mapGoalsToPeople(state.goals, state.people);

  return Object.assign({}, {
    user: state.user,
    people: peopleWithGoals
  });
}

export default connect(propsFromState)(Team);
