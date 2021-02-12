import { useContext, useState } from "react";
import { StateContext } from '../../context';
import { setUsername as setUsernameAction, incrementTwo as incrementTwoAction } from '../../reducer/action';

const ComponentTwo = () => {
  const [username, setUsername] = useState('');
  const { state, dispatch } = useContext(StateContext);
  console.log('rendered component two', state);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const incrementTwo = () => {
    dispatch(incrementTwoAction());
  };

  const saveUsername = () => {
    dispatch(setUsernameAction(username));
  };

  return (
      <>
        <h4>Component Two</h4>
        <div>Counter : {state.app.counter.counter2}<button onClick={incrementTwo}>Increment</button></div>
        <div>
          <p>Email : {state.auth.email}</p>
          Username : <input value={username} onChange={handleUsernameChange} />
          <button onClick={saveUsername}>Save username</button>
        </div>
      </>  
    );
};

export default ComponentTwo;