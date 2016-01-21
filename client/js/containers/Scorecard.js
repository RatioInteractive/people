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

function propsFromState (state) {
  let user = state.user;
  let person = state.people[0] || {};
  let goals = getGoalsForPerson(state.goals, person);
  let comments = getCommentsForPerson(state.comments, person);

  goals = mapTasksToGoals(state.tasks, state.goals);

  return Object.assign({}, {
    user: user,
    person: person,
    goals: goals,
    comments: comments
  });
}

export default connect(propsFromState)(Scorecard);
