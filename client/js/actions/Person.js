export const SELECT = 'Person:SELECT';

export function select (id) {
  return {
    type: SELECT,
    payload: { id }
  };
}

export function reducer (person = {}, action) {
  var result = {};
  switch (action.type) {
    case SELECT:
      result = { _id: action.payload.id };
      break;
  }

  return result;
}
