import Scorecard from '../components/scorecard/index.jsx';
import { connect } from 'react-redux';

function getGoalsForPerson (goals, person) {
  return goals.filter(goal => goal._parent === person._id);
}

function getTasksForGoal (tasks, goal) {
  return tasks.filter(task => task._parent === goal._id);
}

function mapTasksToGoals (tasks, goals) {
  return goals.map(goal => {
    return Object.assign({}, goal, {
      tasks: getTasksForGoal(tasks, goal)
    });
  });
}

function getCommentsForPerson (comments, person) {
  return comments.filter(comment => comment._parent === person._id);
}

function getPerson (personId, people) {
  for(let i = 0; i < people.length; i++) {
    let p = people[i];
    if (p._id === personId)
    {
      return p;
    }
  }
  console.log("Missing person!");
  return people[0];
}

function propsFromState (state, ownProps) {
  let person = getPerson(ownProps.params.personId, state.people);
  let goals = mapTasksToGoals(state.tasks, getGoalsForPerson(state.goals, person));
  let comments = getCommentsForPerson(state.comments, person);

  return Object.assign({}, {
    user: state.user,
    person: person,
    goals: goals,
    comments: comments
  });
}

export default connect(propsFromState)(Scorecard);
