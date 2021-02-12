import { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { INCREMENT_ONE, SET_EMAIL } from '../../reducer/action';

const ComponentOne = () => {
  console.log('rendered component one');
  const { counter1, username } = useSelector((state) => ({
    counter1: state.app.counter.counter1,
    username: state.auth.username
  }));
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const saveEmail = () => {
    dispatch({
      type: SET_EMAIL,
      data: email
    })
  };

  return (
    <>
      <h4>Component One</h4>
      <div>Counter : {counter1}<button onClick={() => dispatch({type: INCREMENT_ONE })}>Increment</button></div>
      <div>
        <p>Username : {username}</p>
        Email : <input value={email} onChange={handleEmail} />
        <button onClick={saveEmail}>Save Email</button>
      </div>
    </>  
  );
};

export default ComponentOne;