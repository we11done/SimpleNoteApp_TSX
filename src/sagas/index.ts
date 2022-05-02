import { takeLatest, put, all, call } from 'redux-saga/effects';
import { Memo } from '../models';
import * as type from '../actions/types';
import {
  FetchMemoAction,
  AddMemoAction,
  DeleteMemoAction,
  RestoreMemoAction,
} from '../actions';
import * as api from '../apis';
function* rootSaga() {
  yield all([
    takeLatest(type.FETCH_MEMO_LIST_REQUEST, fetchMemoList$),
    takeLatest(type.FETCH_DELETED_MEMO_LIST_REQUEST, fetchDeletedMemoList$),
    takeLatest(type.FETCH_MEMO_REQUEST, fetchMemo$),
    takeLatest(type.ADD_MEMO_REQUEST, addMemo$),
    takeLatest(type.DELETE_MEMO_REQUEST, deleteMemo$),
    takeLatest(type.RESTORE_MEMO_SUCCESS, restoreMemo$),
  ]);
}

function* fetchMemoList$() {
  try {
    const memos: Memo[] = yield call(api.fetchMemoList);
    yield put({ type: type.FETCH_MEMO_LIST_SUCCESS, payload: memos });
  } catch (err) {
    console.log(err);
  }
}

function* fetchDeletedMemoList$() {
  try {
    const memos: Memo[] = yield call(api.fetchDeletedMemoList);
    yield put({ type: type.FETCH_DELETED_MEMO_LIST_SUCCESS, payload: memos });
  } catch (err) {
    console.log(err);
  }
}

function* fetchMemo$(action: FetchMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    const memo: Memo = yield call(api.fetchMemo, payload);
    yield put({ type: type.FETCH_MEMO_SUCCESS, payload: memo });
  } catch (err) {
    console.log(err);
  }
}

function* addMemo$(action: AddMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    const memo: Memo = yield call(api.addMemo, payload);
    yield put({ type: type.ADD_MEMO_SUCESSS, payload: memo });
  } catch (err) {
    console.log(err);
  }
}

function* deleteMemo$(action: DeleteMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    yield call(api.deleteMemo, payload);
    yield put({ type: type.DELETE_MEMO_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

function* restoreMemo$(action: RestoreMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    yield call(api.restoreMemo, payload);
    yield put({ type: type.RESTORE_MEMO_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}
export default rootSaga;
