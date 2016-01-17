import Uuid from 'uuid';
import Moment from 'moment';

export const CREATE = 'Tasks:CREATE';
export const REMOVE = 'Tasks:REMOVE';
export const COMPLETE = 'Tasks:COMPLETE';
export const UNCOMPLETE = 'Tasks:UNCOMPLETE';

export function create (parent, name) {
  return {
    type: CREATE,
    payload: {
      task: Object.assign({}, {
        _id: Uuid(),
        _parent: parent._id,
        name: name,
        completed_on: null
      })
    }
  };
}

export function remove (task) {
  return {
    type: REMOVE,
    payload: {
      task: Object.assign({}, task)
    }
  };
}

export function complete (task) {
  return {
    type: COMPLETE,
    payload: {
      task: Object.assign({}, task, {
        completed_on: Moment().format()
      })
    }
  };
}

export function uncomplete (task) {
  return {
    type: UNCOMPLETE,
    payload: {
      task: Object.assign({}, task, {
        completed_on: null
      })
    }
  };
}

export function reducer (tasks = [], action) {

  let result = [].concat(tasks);

  switch (action.type) {
    case CREATE:
      result.push(action.payload.task);
      break;

    case REMOVE:
      result = result.filter(task => {
        return task._id !== action.payload.task._id;
      });
      break;

    case COMPLETE:
    case UNCOMPLETE:
      result = result.map(task => {
        return task._id === action.payload.task._id ? action.payload.task : task;
      });
      break;
  }

  return result;
}
