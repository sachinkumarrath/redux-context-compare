import { useState } from "react";

const ComponentOne = (props) => {
  console.log('rendered component one', props);
  const [email, setEmail] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <h4>Component One</h4>
      <div>Counter : {props.counter1}<button onClick={props.incrementOne}>Increment</button></div>
      <div>
        <p>Username : {props.username}</p>
        Email : <input value={email} onChange={handleEmail} />
        <button onClick={() => props.setEmail(email)}>Save Email</button>
      </div>
    </>  
  );
};

export default ComponentOne;