const { createContext, useContext, useReducer } = require("react");

const StateContext = createContext({});

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer();
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