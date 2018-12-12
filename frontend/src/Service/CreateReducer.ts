export const createReducer = (reducers, initialState) => (state = initialState, action = { type: '' }) => {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
};
