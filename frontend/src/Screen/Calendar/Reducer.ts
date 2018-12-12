import { createReducer } from 'Service/CreateReducer';

const initialState = {};
const GET_CALENDAR = 'getCalendar';

const getCalendar = payload => ({
  payload,
  type: GET_CALENDAR,
});

const reducers = {
  [GET_CALENDAR]: state => state,
};

export const actions = {
  getCalendar
};

export const reducer = createReducer(reducers, initialState);
