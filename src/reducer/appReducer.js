import { INCREMENT_ONE, INCREMENT_TWO } from './action';

const INITIAL_STATE = {
  counter: {
    counter1: 0,
    counter2: 0
  }
};

export default function app (state = INITIAL_STATE, action) {
  switch(action.type) {
    case INCREMENT_ONE:
      return {
        ...state,
        counter: {
          ...state.counter,
          counter1: state.counter.counter1 + 1
        }
      };
    case INCREMENT_TWO:
      return {
        ...state,
        counter: {
          ...state.counter,
          counter2: state.counter.counter2 + 1
        }
      };
    default:
      return state;
  }
};
