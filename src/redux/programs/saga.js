import { call, put, takeLatest, all } from 'redux-saga/effects';
import { updateProgramFetching, updateProgramList } from './action';
import request from '../request';
import { PROGRAMS_LIST, } from './type';


export function* loadProgramList({ param }) {
  yield put(updateProgramFetching(true));
  let url = "";
  Object.keys(param).forEach((key, index) => {
    url += `${(index === 0) ? '?' : '&'}${key}=${param[key]}`;
  });
  const requestURL = `https://api.spacexdata.com/v3/launches${url}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    },
  };
  const response = yield call(request, requestURL, options);
  yield put(updateProgramList(response));
  yield put(updateProgramFetching(false));
}


export default function* programWatch() {
  yield all([
    takeLatest(PROGRAMS_LIST, loadProgramList),
  ]);
}