import { SET_USER_NAME, SET_EMAIL } from './action';

const INITIAL_STATE = {
  userName: '',
  email: ''
};

export default function app (state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        username: action.data
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.data
      };
    default:
      return state;
  }
};
