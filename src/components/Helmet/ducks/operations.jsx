import actions from './actions';

const setTitlePage = (title) => (dispatch) => {
  dispatch(actions.setTitlePageAction({ title }));
};

const operations = {
  setTitlePage
};

export default operations;
