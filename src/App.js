import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import rootReducer from './reducer';
import StateProvider from './context';
import ContextOne from './components/context-comp/ComponentOne';
import ContextTwo from './components/context-comp/ComponentTwo';
import ContextHookOne from './components/context-hooks/ComponentOne';
import ContextHookTwo from './components/context-hooks/ComponentTwo';
import ReduxOne from './components/redux-comp/ContainerOne';
import ReduxTwo from './components/redux-comp/ContainerTwo';
import ReduxHookOne from './components/redux-hooks/ComponentOne';
import ReduxHookTwo from './components/redux-hooks/ComponentTwo';
import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const composeWithDevTools = require("redux-devtools-extension").composeWithDevTools;
//   store = createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(thunk)
//   ));

function App() {
  return (
    <Router>
      <Route path="/redux">
        <Provider store={store}>
          <h2>Redux</h2>
          <ReduxOne />
          <ReduxTwo />
        </Provider>
      </Route>
      <Route path="/redux-hooks">
        <Provider store={store}>
          <h2>Redux with hooks</h2>
          <ReduxHookOne />
          <ReduxHookTwo />
        </Provider>
      </Route>
      <Route path="/context">
        <StateProvider>
          <h2>Context</h2>
          <ContextOne />
          <ContextTwo />
        </StateProvider>
      </Route>
      <Route path="/context-hooks">
        <StateProvider>
          <h2>Context with hooks</h2>
          <ContextHookOne />
          <ContextHookTwo />
        </StateProvider>
      </Route>
    </Router>
  );
}

export default App;
