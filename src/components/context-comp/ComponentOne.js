import { useContext, useState } from "react";
import { StateContext } from '../../context';
import { setEmail as setEmailAction, incrementOne as incrementOneAction } from '../../reducer/action';

const ComponentOne = () => {
  const [email, setEmail] = useState('');
  const { state, dispatch } = useContext(StateContext);
  console.log('rendered component one', state);
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const incrementOne = () => {
    dispatch(incrementOneAction());
  };

  const saveEmail = () => {
    dispatch(setEmailAction(email));
  };

  return (
    <>
      <h4>Component One</h4>
      <div>Counter : {state.app.counter.counter1}<button onClick={incrementOne}>Increment</button></div>
      <div>
        <p>Username : {state.auth.username}</p>
        Email : <input value={email} onChange={handleEmail} />
        <button onClick={saveEmail}>Save Email</button>
      </div>
    </>  
  );
};

export default ComponentOne;