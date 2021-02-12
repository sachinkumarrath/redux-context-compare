export const INCREMENT_ONE = 'INCREMENT_ONE';
export const INCREMENT_TWO = 'INCREMENT_TWO';

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    data: email
  }
};

export const setUsername = (username) => {
  return {
    type: SET_USER_NAME,
    data: username
  }
};

export const incrementOne = () => {
  return {
    type: INCREMENT_ONE
  }
};

export const incrementTwo = () => {
  return {
    type: INCREMENT_TWO
  }
};