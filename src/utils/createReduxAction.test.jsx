import createReduxAction from './createReduxAction';

describe('CreateReduxAction Tests Suite', () => {
  test('Creating an Action', () => {
    const actionType = 'ACTION_TYPE';
    const actionPayload = { variable0: 0, variable1: 'variable1' };
    const action = createReduxAction(actionType, actionPayload);
    const expectedAction = { type: actionType, payload: actionPayload };
    expect(action).toEqual(expectedAction);
  });
});
