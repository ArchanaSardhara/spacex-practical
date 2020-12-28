import { PROGRAMS_FETCH, PROGRAMS_LIST, UPDATE_PROGRAMS_LIST } from "./type";

export const loadPrograms = (param) => {
  return {
    type: PROGRAMS_LIST,
    param
  }
}

export const updateProgramList = (payload) => {
  return {
    type: UPDATE_PROGRAMS_LIST,
    payload
  }
}

export const updateProgramFetching = (payload) => {
  return {
    type: PROGRAMS_FETCH,
    payload
  }
}