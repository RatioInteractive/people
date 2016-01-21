import Header from '../components/header/index.jsx';
import { connect } from 'react-redux';

function propsFromState (state) {
  return Object.assign({}, {
    user: state.user
  });
}

export default connect(propsFromState)(Header);
