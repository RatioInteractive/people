import { expect } from 'chai';
import rewire from 'rewire';
// import chai from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// chai.use(sinonChai);

import state from './../../client/js/state';
let Scorecard = rewire('./../../client/js/containers/Scorecard');

describe('propsFromState', () => {
  var ownProps;
  var propsFromState;

  before(() => {
    propsFromState = Scorecard.__get__('propsFromState');
  });

  beforeEach(() => {
    ownProps = {
      params: { personId: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18' }
    };
  });

  it('returns the user it was given', () => {
    let props = propsFromState(state, ownProps);
    expect(props.user).to.equal(state.user);
  });

  it('returns the person that matches the personId param', () => {
    let props = propsFromState(state, ownProps);
    expect(props.person).to.have.all.keys(['_id', 'name']);
    expect(props.person._id).to.equal(ownProps.params.personId);
  });

  it('returns the goals that match the personId param', () => {
    let props = propsFromState(state, ownProps);
    expect(props.goals).to.have.lengthOf(1);
    props.goals.forEach((goal) => {
      expect(goal).to.have.all.keys(['_id', '_parent', 'name', 'description', 'created_on', 'updated_on', 'tasks']);
      expect(goal._parent).to.equal(ownProps.params.personId);
    });
  });

  it('returns tasks along with the person\'s goals', () => {
    let props = propsFromState(state, ownProps);
    props.goals.forEach((goal) => {
      expect(goal).to.have.any.keys(['tasks']);
      expect(goal.tasks).to.have.lengthOf(1);
      goal.tasks.forEach((task) => {
        expect(task).to.have.all.keys(['_id', '_parent', 'name', 'completed_on']);
        expect(task._parent).to.equal(goal._id);
      });
    });
  });

  it('returns comments that match the personId param', () => {
    let props = propsFromState(state, ownProps);
    expect(props.comments).to.have.lengthOf(1);
    props.comments.forEach((comment) => {
      expect(comment).to.have.all.keys('_id', '_parent', 'date', 'author', 'message');
      expect(comment._parent).to.equal(ownProps.params.personId);
    });
  });
});
