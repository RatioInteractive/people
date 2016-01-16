import Scorecard from '../components/scorecard/index.jsx';
import { connect } from 'react-redux';

function propsFromState (state) {
  return state.people[0];
}

export default connect(propsFromState)(Scorecard);
