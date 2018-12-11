import { createReducer } from 'Application/Reducer';

const initialState = {};
const LOGIN = 'login';

const login = payload => ({
  payload,
  type: LOGIN,
});

const reducers = {
  [LOGIN]: state => state,
};

export const actions = {
  login
};

export const reducer = createReducer(reducers, initialState);
