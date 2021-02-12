import { createContext, useContext, useReducer } from 'react';
import appReducer from '../reducer/appReducer';
import authReducer from '../reducer/authReducer';

export const StateContext = createContext({});

const initialState = {
  app: {
    counter: {
      counter1: 0,
      counter2: 0
    }
  },
  auth: {
    userName: '',
    email: ''
  }
};

const reducer = ({ app, auth }, action) => ({
  app: appReducer(app, action),
  auth: authReducer(auth, action)
});

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const providerValue = {
    state,
    dispatch
  }
  return <StateContext.Provider value={providerValue}>
    {children}
  </StateContext.Provider>
};

export const useStateValue = () => useContext(StateContext);

export default StateProvider;