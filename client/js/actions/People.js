import * as User from './User';

export function reducer (people = [], action) {

  let result = [].concat(people);

  switch (action.type) {
    case User.LOGOUT:
      result = [];
      break;
  }

  return result;
}
