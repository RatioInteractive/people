export const LOGOUT = 'User:LOGOUT';

export function logout () {
  return {
    type: LOGOUT,
    payload: {}
  };
}

export function reducer (user = {}, action) {

  let result = Object.assign({}, user);

  console.debug('foo');

  switch (action.type) {
    case LOGOUT:
      result = {};
      break;
  }

  return result;
}
