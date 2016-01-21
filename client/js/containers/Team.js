import Team from '../components/team/index.jsx';
import { connect } from 'react-redux';

function propsFromState (state) {
  return Object.assign({}, {
    people: state.people
  });
}

export default connect(propsFromState)(Team);
