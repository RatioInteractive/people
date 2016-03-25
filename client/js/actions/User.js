export const LOGOUT = 'User:LOGOUT';

export function logout () {
  return {
    type: LOGOUT,
    payload: {}
  };
}

export function reducer (user = {}, action) {

  let result = Object.assign({}, user);
  switch (action.type) {
    case LOGOUT:
      result = {};
      break;
  }

  return result;
}
