import Uuid from 'uuid';
import Moment from 'moment';

export const CREATE = 'Comments:CREATE';

export function create (parent, author, message) {
  return {
    type: CREATE,
    payload: {
      comment: {
        _id: Uuid(),
        _parent: parent._id,
        date: Moment().format(),
        author: author.name,
        message: message
      }
    }
  };
}

export function reducer (comments = [], action) {

  let result = [].concat(comments);

  switch (action.type) {
    case CREATE:
      result.unshift(action.payload.comment);
      break;
  }

  return result;
}
