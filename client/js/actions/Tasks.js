import Moment from 'moment';

export const COMPLETE = 'Tasks:COMPLETE';
export const UNCOMPLETE = 'Tasks:UNCOMPLETE';

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
    case COMPLETE:
    case UNCOMPLETE:
      result = result.map(task => {
        return task._id === action.payload.task._id ? action.payload.task : task;
      });
      break;
  }

  return result;
}
