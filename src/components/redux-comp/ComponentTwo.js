import { useState } from "react";

const ComponentTwo = (props) => {
  console.log('rendered component two', props);
  const [username, setUsername] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
      <>
        <h4>Component Two</h4>
        <div>Counter : {props.counter2}<button onClick={props.incrementTwo}>Increment</button></div>
        <div>
          <p>Email : {props.email}</p>
          Username : <input value={username} onChange={handleUsernameChange} />
          <button onClick={() => props.setUsername(username)}>Save username</button>
        </div>
      </>  
    );
};

export default ComponentTwo;