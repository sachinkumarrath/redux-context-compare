import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ComponentOne from './ComponentOne';
import { setEmail, setUsername, incrementOne  } from '../../reducer/action';

const mapStateToProps = (state) => ({
  username: state.auth.username,
  counter1: state.app.counter.counter1
});

// const mapDispatchToProps = (dispatch) => ({
//   setEmail: () => dispatch({ type: 'INCREMENT' }),
//   setEmail: () => dispatch({ type: 'DECREMENT' }),
//   setEmail : () => dispatch({ type: 'RESET' })
// });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setEmail, incrementOne }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);