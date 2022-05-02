import { takeLatest, put, all, call } from 'redux-saga/effects';
import { Memo } from '../models';
import {
  FETCH_MEMO_LIST_REQUEST,
  FETCH_MEMO_LIST_SUCCESS,
} from '../actions/types';
import * as api from '../apis';
function* rootSaga() {
  yield all([takeLatest(FETCH_MEMO_LIST_REQUEST, fetchmemoList$)]);
}

function* fetchmemoList$() {
  try {
    const memos: Memo[] = yield call(api.fetchMemoList);
    yield put({ type: FETCH_MEMO_LIST_SUCCESS, payload: memos });
  } catch (err) {
    console.log(err);
  }
}
export default rootSaga;
