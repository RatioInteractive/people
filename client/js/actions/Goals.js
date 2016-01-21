import Uuid from 'uuid';
import Moment from 'moment';
import * as User from './User';

export const CREATE = 'Goals:CREATE';
export const SET_NAME = 'Goals:SET_NAME';
export const SET_DESCRIPTION = 'Goals:SET_DESCRIPTION';

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

export function setName (goal, value) {
  return {
    type: SET_NAME,
    payload: {
      goal: Object.assign({}, goal, {
        name: value
      })
    }
  };
}

export function setDescription (goal, value) {
  return {
    type: SET_DESCRIPTION,
    payload: {
      goal: Object.assign({}, goal, {
        description: value
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

    case SET_NAME:
    case SET_DESCRIPTION:
      result = result.map(goal => {
        if (goal._id === action.payload.goal._id) {
          return action.payload.goal;
        } else {
          return goal;
        }
      });
      break;

    case User.LOGOUT:
      result = [];
      break;
  }

  return result;
}
