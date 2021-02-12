import { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { INCREMENT_TWO, SET_USER_NAME } from '../../reducer/action';

const ComponentTwo = () => {
  console.log('rendered component two');
  const { counter2, email } = useSelector((state) => ({
    counter2: state.app.counter.counter2,
    email: state.auth.email
  }));
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const saveUsername = () => {
    dispatch({
      type: SET_USER_NAME,
      data: username
    })
  };

  return (
      <>
        <h4>Component Two</h4>
        <div>Counter : {counter2}<button onClick={() => dispatch({type: INCREMENT_TWO })}>Increment</button></div>
        <div>
          <p>Email : {email}</p>
          Username : <input value={username} onChange={handleUsernameChange} />
          <button onClick={saveUsername}>Save username</button>
        </div>
      </>  
    );
};

export default ComponentTwo;