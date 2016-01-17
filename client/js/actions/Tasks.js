import Uuid from 'uuid';
import Moment from 'moment';

export const CREATE = 'Tasks:CREATE';
export const COMPLETE = 'Tasks:COMPLETE';
export const UNCOMPLETE = 'Tasks:UNCOMPLETE';

export function create (parent, name, deadline) {
  return {
    type: CREATE,
    payload: {
      task: Object.assign({}, {
        _id: Uuid(),
        _parent: parent._id,
        name: name,
        deadline: Moment(deadline).format(),
        completed_on: null
      })
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

    case COMPLETE:
    case UNCOMPLETE:
      result = result.map(task => {
        return task._id === action.payload.task._id ? action.payload.task : task;
      });
      break;
  }

  return result;
}
