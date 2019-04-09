/**
 * Create an action for the Redux store .
 * @function
 * @param {string} type - The action type, generally formatted as 'COMPONENT/ACTION_NAME'.
 * @param {object} payload - The action payload.
 */
const createReduxAction = (type, payload) => ({ type, payload });

export default createReduxAction;
