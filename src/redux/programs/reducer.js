import { PROGRAMS_FETCH, UPDATE_PROGRAMS_LIST } from "./type";

export const initialState = {
  programs: [],
  fetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROGRAMS_LIST:
      return { ...state, programs: action.payload }
    case PROGRAMS_FETCH:
      return { ...state, fetching: action.payload }
    default:
      return state
  }
};
export default reducer;