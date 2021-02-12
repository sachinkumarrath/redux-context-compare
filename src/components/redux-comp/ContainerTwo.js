import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ComponentTwo from './ComponentTwo';
import { setEmail, setUsername, incrementTwo  } from '../../reducer/action';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  counter2: state.app.counter.counter2
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUsername, incrementTwo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwo);