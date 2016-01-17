import Uuid from 'uuid';
import Moment from 'moment';

export const CREATE = 'Goals:CREATE';

export function create (parent) {
  return {
    type: CREATE,
    payload: {
      goal: Object.assign({}, {
        _id: Uuid(),
        _parent: parent._id,
        name: '',
        description: '',
        created_on: Moment().format(),
        updated_on: Moment().format()
      })
    }
  };
}

export function reducer (goals = [], action) {

  let result = [].concat(goals);

  switch (action.type) {
    case CREATE:
      result.unshift(action.payload.goal);
      break;
  }

  return result;
}
